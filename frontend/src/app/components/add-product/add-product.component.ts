import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;
    product: {}

    get productName() {
      return this.productsForm.get('name');
    }

    get productDescription() {
      return this.productsForm.get('description');
    }

    get productPrice() {
      return this.productsForm.get('price');
    }

    get productQuantity() {
      return this.productsForm.get('quantity');
    }
    
    constructor(private fb: FormBuilder, private store: StoreService) { }
    
    productsForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        description: ['' , [Validators.required, Validators.minLength(10)]],
        price: ['', [Validators.required, Validators.min(1)]],
        quantity: ['', Validators.required],
    })


    ngOnInit() {
    }

    fileChangeEvent(fileInput: any) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;

            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';

                return false;
            }

            if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
                this.imageError = 'Only Images are allowed ( JPG | PNG )';
                return false;
            }
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];

                    // console.log(img_height, img_width);

                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                            max_height +
                            '*' +
                            max_width +
                            'px';
                        return false;
                    } else {
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
        }
        
        // console.log(this.cardImageBase64);
        this.productsForm.patchValue({
          imageurl: this.cardImageBase64
        });
    }

    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
    }
    addProduct(obj){
      let date = new Date();
      var product = {
        description: null as string,
        imageurl: null as string,
        name: null as string,
        price: null as number,
        inventory_id: null as number,
        category_id: null as number,
        modified_at: null as Date,
        created_at: null as Date,
        deleted_at: null as Date,
      }
      product.modified_at =date;
      product.created_at = date;
      product.inventory_id =1;
      product.imageurl = "https://i.ibb.co/xsKXLYN/bg-3.jpg"; //obj.imageurl;
      product.description = obj.description;
      product.category_id =9;
      product.price =  obj.price;
      product.name = obj.name;
      product.deleted_at = date;

      return product;
    }
    onSubmit() {
      if(this.cardImageBase64 == null) { return }
      // console.log(this.cardImageBase64);

      this.product = {
        ...this.productsForm.value,
        "imageurl": this.cardImageBase64 
      };

      console.log("=====");
      console.log(this.product)
      
      let product = this.addProduct(this.product)
      console.log(product);
      // adding to database using the store service
      this.store.addProduct(product);   
      alert(product.name+' successfully added!');
      this.productsForm.reset();
      this.removeImage();
      
    }

}

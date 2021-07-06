# Trumbowyg Plugin - Image As A Link
This is a simple plugin for the Trumbowyg editor. It can be used to insert image which acts like a link and points to somewhere.


## Instalation
1. Go to Trumbowyg official website: https://alex-d.github.io/Trumbowyg/documentation/
2. Install Trumbowyg editor based on the steps in the documentation. 
3. After that you need to download this plugin and paste the whole **imageAsALink folder** in the Trumbowyg **downloaded plugins folder**.
4. Then you need to include link to the `imageAsALink/trumbowyg.imageAsALink.js` in YOUR project.
5. To load the editor and this plugin as said in the Trumbowyg documentation you need to first load `jQuery>=1.8`, `trumbowyg/dist/trumbowyg.min.js` and to include in your head this `trumbowyg/dist/ui/trumbowyg.min.css`.
6. After that you need to add to the options of the editor the name of the plugin **(imageAsALink)** and execute the editor with the options.
   - **You need simple div or textarea**  
   ```html <div id="imageAsALinkExample"></div>```
   - **And the minimum options in JavaScript:**  
    ```js 
    var trumbowyg_options = {
     resetCss: true,
     removeformatPasted: true,
     autogrow: true,
     defaultLinkTarget: '_blank',
     btnsDef: {
        imageAsALink: {
            ico: 'insertImage'
        }
     },
     btns: [
          ['imageAsALink']
     ]}; 
     
     $('#imageAsALinkExample').trumbowyg(trumbowyg_options);
7. Then image button will show and now you can use the plugin.


## Plugin Properties
- **Image URL** - This is the URL of an image. **REQUIRED**
- **Image ALT** - This is the ALT Text of an image. **NOT REQUIRED**
  - *If input is empty -> Default text **"Image as a Link"** will be added.*
- **Link URL** - This is the Link where you want the image to point to. **REQUIRED**
- **Width** - This is the width of an image. It can be in px or % (it should be filled px or %). **NOT REQUIRED**
  - *If input is empty -> Defauld **width of 100%** will be added.*
- **Title** - This is the title of an image. When you hover on the image it will show. **NOT REQUIRED**
  - *If input is empty -> Default text **"Click to open in new tab."** will be added.*

### This Image Shows how to fill with **REQUIRED** properties:
![alt text](https://rbatinov.github.io/Trumbowyg-Plugin-Image-As-A-Link/img/image-as-a-link-required-options.png)

### This Image Shows how to fill **ALL** properties:
![alt text](https://rbatinov.github.io/Trumbowyg-Plugin-Image-As-A-Link/img/image-as-a-link-all-options.png)    

## You can check DEMO of plugin on this link:
https://rbatinov.github.io/Trumbowyg-Plugin-Image-As-A-Link/  

## License
Plugin is under the [MIT License](https://github.com/rbatinov/Trumbowyg-Plugin-Image-As-A-Link/blob/main/LICENSE)  

## Enjoy!

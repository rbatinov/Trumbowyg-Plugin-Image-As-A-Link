/* ===========================================================
*  trumbowyg.imageAsALink.js v1.0
*  Image As a Link plugin for Trumbowyg
*  http://alex-d.github.com/Trumbowyg
*  ===========================================================
*  Author : Eng. R. Batinov
*/

(function ($) {

'use strict';

var insertImgOptions = {
    src: {
        label: 'Image URL',
        required: true
    },
    alt: {
        label: 'ALT Text',
        required: false
    },
    link: {
        label: 'Link URL (to point to)',
        required: true
    },
    ImageWidth: {
        label: 'Width (px or %)',
        required: false
    },
    ImageTitle: {
        label: 'Title',
        required: false
    },
    
};

$.extend(true, $.trumbowyg, {
    langs: {
        en: {
            imageAsALink: 'Image as a Link',
        },
        bg: {
            imageAsALink: 'Изображение като линк',
        }
    },

    plugins: {
        imageAsALink: {
            init: function (trumbowyg) {
                var btnDef = {
                    fn: function () {
                        var insertImgCallback = function (v) {
                            var html = '<a href="***ImageLink***" target="_blank" title="***ImageTitle***"><img class="ImageLink" src="***ImageSrc***" alt="***ImageALT***" style="width:***ImageWIDTH***"></a>';
                            var altDefault = 'Image as a Link';
                            var linkDefault = '#';
                            var widthDefault = '100%';
                            var titleDefault = 'Click to open in new tab.';

                            if (v.src) {
                                html = html.replace("***ImageSrc***", v.src);
                            }
                            
                            if (v.alt) {
                                html = html.replace("***ImageALT***", v.alt);
                            }
                            else{
                                html = html.replace("***ImageALT***", altDefault);
                            }
                            
                            if (v.link) {
                                html = html.replace("***ImageLink***", v.link);
                            }
                            else{
                                html = html.replace("***ImageLink***", linkDefault);
                            }

                            if(v.ImageWidth){
                                html = html.replace("***ImageWIDTH***", v.ImageWidth);
                            }
                            else{
                                html = html.replace("***ImageWIDTH***", widthDefault);
                            }

                            if(v.ImageTitle){
                                html = html.replace("***ImageTitle***", v.ImageTitle);
                            }
                            else{
                                html = html.replace("***ImageTitle***", titleDefault);
                            }

                            var node = $(html)[0];
                            trumbowyg.range.deleteContents();
                            trumbowyg.range.insertNode(node);
                            
                            return true;
                        };

                        trumbowyg.openModalInsert(trumbowyg.lang.imageAsALink, insertImgOptions, insertImgCallback);
                    }
                };
                
                trumbowyg.addBtnDef('imageAsALink', btnDef);
            }
        }
    }
});
})(jQuery);
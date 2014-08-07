define(function(require, exports){
    var Dialogs = brackets.getModule('widgets/Dialogs'),
        pixlrTemplate = require('text!../templates/modal.html'),
        installFlashTemplate = require('text!../templates/installFlash.html');

    function showHandler(){
        if (isFlashPlayerInstalled()){
            Dialogs.showModalDialogUsingTemplate(pixlrTemplate)._$dlg;
        } else {
            Dialogs.showModalDialogUsingTemplate(installFlashTemplate)._$dlg;
        }
    }

    function isFlashPlayerInstalled(){
        return !!navigator.mimeTypes ["application/x-shockwave-flash"];
    }

    exports.showHandler = showHandler;
});

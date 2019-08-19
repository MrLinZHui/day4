Ext.override(Ext.form.HtmlEditor, {
    initEditor: function () {
        var dbody = this.getEditorBody();
        var ss = this.el.getStyles('font-size', 'font-family', 'background-image', 'background-repeat');
        ss['background-attachment'] = 'fixed';
        // w3c           
        ss['background-color'] = 'white';
        dbody.bgProperties = 'fixed'; // ie           
        Ext.DomHelper.applyStyles(dbody, ss);

        // if (this.doc) {
        //     try {
        //         Ext.EventManager.removeAll(this.doc);
        //     } catch (e) { }
        // }
        this.doc = this.getDoc();
        console.log(this.doc)
        Ext.EventManager.on(this.doc, {
            'keyup': this.onEditorKeyUpEvent,
            buffer: 100,
            scope: this
        });
        this.initialized = true;
        this.fireEvent('initialize', this);
        this.doc.editorInitialized = true;
        this.pushValue();
    },
    initComponent: function () {
        this.addEvents(
            'keyup',
        );
    },
    onEditorKeyUpEvent: function (e) {
        this.updateToolbar();
        this.fireEvent("keyup", this, e);
    },
});  
Ext.ns("Ext.hoo.editor");
Ext.hoo.editor.HTMLEditor = Ext.extend(Ext.form.HtmlEditor,
    {
        constructor: function () {
            Ext.hoo.editor.HTMLEditor.superclass.constructor.call(this, {
                renderTo: Ext.getBody(),
                fieldLabel: 'Biography',
                height: 200,
                listeners: {
                    "keyup": function (editor, e) { 
                        console.log(editor.getValue());
                        Ext.getCmp('reply').setDisabled(Ext.isEmpty(editor.getValue()))
                    },
                }
            });
        }
    })
    Ext.reg("Ext.hoo.editor.HTMLEditor",Ext.hoo.editor.HTMLEditor);
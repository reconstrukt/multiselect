/*
 * jQuery Multiselect
 *
 */

(function($){
  var Multiselect = function ( select, o ) {
    
    var options = $.extend( {
      cssClass : 'jquery-multiselect',
      maxSelections : null,
      autoSize : true,
      debug : false
    }, o );
    
    var picker = {
      ul : null,
      lis : null
    }
    
    // init
    this.init = function() {
      
      if ( options.debug ) console.log('multiselect init');
      
      select.hide();

      picker.ul = $('<ul />').addClass( options.cssClass );
      
      if ( options.autoSize ) {
        picker.ul
          .css( 'height', select.height() + 'px' )
          .css( 'width', ( select.width() + 30 ) + 'px' );
      }

      select.children( 'option' ).each(function() {
        
        var op = $(this);        
        var li = $( '<li />' )
          .data( 'multiselect', { boundOption : op } )
          .bind( 'click.multiselect', function( event ){
            
            var li_clicked = $(this);
            
            if ( options.debug ) console.log( 'clicked : ' + li_clicked.text() );
            
            // has changes?
            var changed = false;
            
            // toggle the option
            if ( options.maxSelections === 1 ) {
              picker.lis.removeClass( 'selected' );
              li_clicked.addClass( 'selected' );
              changed = true;
            } else {
              if ( li_clicked.hasClass( 'selected' ) ) {
                li_clicked.removeClass( 'selected' );
                changed = true;
              } else if ( ( options.maxSelections == null ) || ( picker.lis.filter('.selected').length < options.maxSelections ) ) {
                li_clicked.addClass( 'selected' );
                changed = true;
              }
            }
            
            if ( changed ) {
              if ( options.debug ) console.log( 'changes made to <li> & <option>' );
              
              // update the <select> state
              select.data( 'multiselect' ).sync();
              
              // trigger change event on <option>
              var op_clicked = li_clicked.data( 'multiselect' )['boundOption'];
              if ( op_clicked ) op_clicked.trigger( 'change' );              
            }
            
            event.stopPropagation();
            
          })
          .text( op.text() )
          .appendTo( picker.ul );
        
        if ( op.prop( 'selected' ) ) {
          li.addClass( 'selected' );
        }
      });
      
      picker.lis = picker.ul.children('li');
      picker.ul.insertAfter( select );
      
    };
    
    // update the <select> state
    this.sync = function(){
      
      if ( options.debug ) console.log('syncing <select>');
      
      picker.lis.each( function(){
        var li = $(this);
        var op = li.data( 'multiselect' )['boundOption'];
        
        if ( op ) {
          op.prop( 'selected', ( li.hasClass( 'selected' ) ? true : false ) );
        }
        
        if ( options.debug && li.hasClass( 'selected' ) ) {
          console.log( '<li> : ' + li.text() + ' : selected ');
          console.log( '<option> : ' + op.text() + ' : ' + op.prop( 'selected' ) );
        }
      });
    };

    // re-init instance
    this.update = function() {
      if ( options.debug ) console.log('calling multiselect.update()');
      this.destroy();
      this.init();
    };

    // destroy instance
    this.destroy = function() {
      if ( options.debug ) console.log('calling multiselect.destroy()');
      picker.ul.remove();
    };
  };

  $.fn.multiselect = function(options) {
    return this.each(function() {
      
      var select = $(this);
      
      // handle plugin instances
      if ( select.data('multiselect') ) {
        if (options.destroy) {
          select.data( 'multiselect' ).destroy();
          return;
        }
        if (options.update) {
          select.data( 'multiselect' ).update();
          return;
        }
      }

      // construct plugin instance
      var multiselect = new Multiselect( select, options );
      multiselect.init();

      // stash plugin object on select's data
      select.data( 'multiselect', multiselect );
      
      if ( options.debug ) console.log('multiselect ready');
      
    });
  };
})(jQuery);
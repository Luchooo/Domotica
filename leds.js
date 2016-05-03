var five = require( 'johnny-five' ),
    board,
    narf = require( 'narf' );
 
board = new five.Board();
 
/*
  Executes a command and fires event when done that
  will return the command output
*/

 
// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function() {
	//console.log('Conectate a traves de: http://localhost:8079/index.html');
  var val = 0;
  var array = new five.Leds([13, 12, 8,7,4]);
  // Set pin 13 to OUTPUT mode
  this.pinMode( 13, 1 );

    this.pinMode( 12, 1 ); // Definir el pin 12 como salida
 	this.pinMode( 8, 1 );
 	this.pinMode( 7, 1 );
 	this.pinMode( 4, 1 );


 this.digitalWrite( 13, 0 );
 this.digitalWrite( 12, 0 );
  this.digitalWrite( 8, 0 );
 this.digitalWrite( 7, 0 );
  this.digitalWrite( 4, 0 );

	var self = this;
 
	var APIFunctions = {
 
		GET : {
			ledbano : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){
				
					self.digitalWrite( 8, data.url.value );
				}
 
				callback( data.url.value );
			},
		ledcocina : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){
				
					self.digitalWrite( 13, data.url.value );
				}

				callback( data.url.value );
			},
		ledhabitacion1 : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){
				
					self.digitalWrite( 7, data.url.value );
				}
 
				callback( data.url.value );
			},
		ledhabitacion2 : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){
				
					self.digitalWrite( 4, data.url.value );
				}
 
				callback( data.url.value );
			},
		ledparqueadero : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){
				
					self.digitalWrite( 12, data.url.value );
				}
 
				callback( data.url.value );
			},
		ledtodas : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){
				
					self.digitalWrite( 13, data.url.value );
					self.digitalWrite( 12, data.url.value );
					self.digitalWrite( 8, data.url.value );
					self.digitalWrite( 7, data.url.value );
					self.digitalWrite( 4, data.url.value );
				}
 
				callback( data.url.value );
			},
		ledfiesta : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 ){
				
					 
					  array.blink(500);
				}

				else
					{
					
			 
					  array.stop(); 
					  array.off() 
					
					}
 
				callback( data.url.value );
			}
		},
		POST : {}
	};
 
	
  
});

narf.setDebug( false );

narf.pageServer( {

    port : 8079,
    path :  "http://luchooo.github.io/Domotica/"
} )

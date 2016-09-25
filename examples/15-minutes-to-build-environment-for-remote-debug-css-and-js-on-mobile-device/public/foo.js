(function(){
    console.log('foo.js loaded');
    
    function testClick() {
        console.log('button clicked');
        alert('button clicked');
        // alert('button clicked 2');
    }
    
    $(document).ready(function(){ 
        $("#testButton").on('click', testClick);
    });
})();
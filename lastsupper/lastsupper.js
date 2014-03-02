document.addEventListener( 'DOMNodeInserted', function( event ) { lastsupper( event, 'node' ) }, false );

function lastsupper( event, node_trigger ) {
    var scope = ( node_trigger == 'node' ) ? event.target : document;

    var textdata = document.evaluate(
        './/text()',
        scope,
        null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    for( var i = 0; textdata.snapshotLength; i++ ) {
        var node = textdata.snapshotItem(i);
        node.data = node.data.replace( /sup qt/i, 'I am pleased to meet you and though I am not quite fully in control of the concept of female personhood, I look forward to your continued acquaintance.');
        console.log( node.data );
    }
}

lastsupper();
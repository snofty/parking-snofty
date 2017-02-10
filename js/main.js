var RED_ZONE_BUFFER_PERCENT=20;
$(document).ready(function(){
    prepareParkingAllotments('bike',10,10);
    prepareParkingAllotments('car',10,5);
});

$(document).on("click", "#bikeParkingTable td", function(e) {
    addOnclickEvent('bike',this);
});

$(document).on("click", "#carParkingTable td", function(e) {
    addOnclickEvent('car',this);
});


function prepareParkingAllotments(vehicleType,rows,columns){
    var tableBodyId='#'+vehicleType+'Table-body-id';
    var container = $(tableBodyId);
    var $trs = $();
    var i = 1;
    var index=1;
    for (; i <=rows; i++) {
        var $tr = $('<tr/>', {class: 'table-row', id: 'table-row-id-'+index});
        for (var j = 1; j<=columns; j++) {
            $tr.append($('<td />', {class: vehicleType+'parking-roadClass', id: vehicleType+'Space'+index, text: vehicleType+'Space'+index}));
            index++;
        }
        $trs = $trs.add($tr);
    }
    container.append($trs);
    console.log(container);
    var totalSpaces=index-1;
    var SpacesCountId='#'+vehicleType+'SpacesCountId';
    console.log(SpacesCountId);
    console.log($(SpacesCountId).html());
    $(SpacesCountId).html(totalSpaces);
    $('#'+vehicleType+'AvailableSpacesCountId').html(totalSpaces);
}

function addOnclickEvent(vehicleType, thisRef){
    var cellText = $(thisRef).html();
    //console.log(cellText);
    if(thisRef.id!=cellText){
        alert('Already occupied');
    }else{
        var vehicleNum=prompt('Enter vehicle number');
        $('#'+thisRef.id).html(vehicleNum);
        $(thisRef).addClass(vehicleType+'parking-full');
        var occupiedSpaces=$('#'+vehicleType+'OccupiedSpacesCountId').html();
        var totalSpaces=$('#'+vehicleType+'SpacesCountId').html();
        ++occupiedSpaces;
        var availableSpacesCount=(totalSpaces-occupiedSpaces);
        if (availableSpacesCount==((RED_ZONE_BUFFER_PERCENT*totalSpaces)/100)) {
             $("#"+vehicleType+"Allotmentshow.buttonClass").css("background-color","red");
            $("#"+vehicleType+"Allotmentshow.buttonClass").css("color","white");
        }
        else if((totalSpaces/2)<=occupiedSpaces){
            console.log(vehicleType);
            $("#"+vehicleType+"Allotmentshow.buttonClass").css("background-color","#FFFF99");
            $("#"+vehicleType+"Allotmentshow.buttonClass").css("color","#8B4513");
        }
        $('#'+vehicleType+'OccupiedSpacesCountId').html(occupiedSpaces);
        $('#'+vehicleType+'AvailableSpacesCountId').html(availableSpacesCount);
    }
}       
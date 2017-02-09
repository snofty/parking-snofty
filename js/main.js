$(document).ready(function(){
            var container = $('.table-body');
            var $trs = $();
    		//var spaces='';
    		var rows=16;
    		var columns=5;
            var i = 1;
            var index=1;
    		for (; i <=rows; i++) {
    			var $tr = $('<tr/>', {class: 'table-row', id: 'table-row-id-'+index});
    			for (var j = 1; j<=columns; j++) {
    				//spaces+="<td>Dynamic Space</td>";
                    $tr.append($('<td />', {class: 'parking-roadClass', id: 'Space'+index, text: 'Space'+index}));
                    
                     index++;
    			}
    			//spaces+='</tr>';
                $trs = $trs.add($tr);
    		}
 			//$('#parkingTable').append(spaces);
            container.append($trs);
            var totalSpaces=index-1;
            $('#spacesCountId').html(totalSpaces);
            $('#availableSpacesCountId').html(totalSpaces);
            
		});
        $(document).on("click", "#parkingTable td", function(e) {
           // alert(this.id);
           var cellText = $(this).html();
           console.log(cellText);
           if(this.id!=cellText){
                alert('Already occupied');
           }else{
                var vehicleNum=prompt('Enter text here');
                $('#'+this.id).html(vehicleNum);
                $(this).addClass('parking-full');
                var occupiedSpaces=$('#occupiedSpacesCountId').html();
                var totalSpaces=$('#spacesCountId').html();
                $('#occupiedSpacesCountId').html(++occupiedSpaces);
                $('#availableSpacesCountId').html((totalSpaces-occupiedSpaces));
           }
          
        });
       
$(document).ready(function(){
            var container = $('.table-body');
            var $trs = $();
    		//var spaces='';
    		var rows=6;
    		var columns=3;
            var i = 1;
            var index=1;
    		for (; i <=rows; i++) {
    			var $tr = $('<tr/>', {class: 'table-row', id: 'table-row-id-'+index});
    			for (var j = 1; j<=columns; j++) {
    				//spaces+="<td>Dynamic Space</td>";
                    $tr.append($('<td />', {class: 'name', id: 'space-'+index, text: 'Space'+index}));
                    
                     index++;
    			}
    			//spaces+='</tr>';
                $trs = $trs.add($tr);
    		}
 			//$('#parkingTable').append(spaces);
            container.append($trs);

            
            
		});
        $(document).on("click", "#parkingTable td", function(e) {
            alert(this.id);
        });
       
/**
 * 
 */


$(function () {
	$('#btn').click(function(){
		let total =0;
		$('.orderItem').remove();
		$('.menu').each(function(index){
			const count = parseInt($(this).find('.menuCount').val());
			if (count > 0){ 
			const name = $(this).find('span').eq(0).text();
			const price = parseInt($(this).find('span').eq(1).text());
			
			let sum = count * price;
			total += sum;
			
			$('#listtr').after(`
            <tr class="orderItem">
              <td>${name}   수량: ${count}   가격: ${price}</td>
              <td><input type="button" class="delete" value="삭제"></td>
            </tr>
          ` );

			}
		})
    $('#total').val(total);
    $('.menuCount').val(0);
	})
	
	$('#listTable').on('click', '.delete', function(){
		const row = $(this).closest('tr');
		const price = parseInt(row.find('td').eq(0).text().split('수량: ')[1].split(' 가격: ')[0].trim()) || 0;
		const count = parseInt(row.find('td').eq(0).text().split('가격: ')[1].trim()) || 0;
		
		let sum = count * price;
		
		let currentTotal = parseInt($('#total').val()) || 0;
		currentTotal -= sum;
		$('#total').val(currentTotal);
		
		$(this).closest('tr').remove();
	})
})



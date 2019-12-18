function modalShow() {
	$("#id_modal").show();
	$("#id_modal").css('animation-name', 'show_modal');
	// $(".modal-content:first").css('animation-name', 'show_modal');
}

function modalHide() {
	// $(".modal-content:first").css('animation-name', 'hide_modal');
	$("#id_modal").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#id_modal").hide();
	}, 300);
}

function show_error(pesan) {
	$("#error_modal").find('b').html(pesan);
	$("#error_modal").show();
	$("#error_modal").css('animation-name', 'show_modal');

	$("#close_error_form").click(function(event) {
		// $("#error_modal").hide();
		$("#error_modal").css('animation-name', 'hide_modal');
		setTimeout(function function_name() {
			$("#error_modal").hide();
		}, 300);
	});

	window.onclick = function(event) {
		var modal = document.getElementById('error_modal');
		if(event.target == modal){
			$("#error_modal").css('animation-name', 'hide_modal');
			setTimeout(function function_name() {
				$("#error_modal").hide();
			}, 300);
		}
	};
}

//Validasi input kosong
$.fn.validateEmpty = function () {
	var form = this;

	form.on('submit', function (event) {
		event.preventDefault();
		var inputan = form.find("input,select");
		// console.log(inputan);
		var kosong = false;
		inputan.each(function(index, el) {
			if ($(el).val() == "") {
				kosong = true;
			}
		});

		if(kosong){
			show_error("Harap lengkapi data isian");
		}
		else{
			form.off('submit').trigger('submit');
		}
	});
}

$.fn.updateProfile = function () {
	var form = this;
	var status = "";

	form.on("click", function(event) {
    	event.preventDefault();

		var nama = $("#mnama").val();
    	var no_hp = $("#mno_hp").val();
    	var tempat = $("input[name='mtempat']").val();
    	var gender = $("input[name='gender']:checked").val();
    	var agama = $("select[name='agama']").val();

    	//RegEx
		var namaReg = /^[a-zA-Z' ]+$/; //alfabet(besar atau kecil), petik ('), dan spasi saja
		var angka = /^\d+$/; //angka saja

    	if (nama == "" || tempat == "" || no_hp == "" || gender == "" || agama == "") {
    		show_error("Harap lengkapi data profil");
			status = false;
			
    	} 
    	else if (!namaReg.test(nama)) {
    		show_error("Nama hanya boleh menggunakan huruf dan tanda petik (')");
    		status = false;
    	}
    	else if (!angka.test(no_hp)) {
			show_error("Nomor HP hanya boleh menggunakan angka");
			status = false;
		}
    	else {
    		$("input#nama_user").val(nama);
    		$("input#tempat_user").val(tempat);
    		$("input#noHP_user").val(no_hp);
    		$("input#gender_user").val(gender);
			$("input#agama").val(agama);
			console.log(nama)
			console.log(gender)
			console.log(agama)
			console.log(tempat) 
			console.log(no_hp) 
   		// $("#id_modal").hide();
   		modalHide();
    	}
   });
   $("#btn_file").change(function(event) {
   	if (this.files && this.files[0]) {
   	  var reader = new FileReader();

   	  reader.onload = function(e) {
   	    // $('#avatar_user').show();
   	    $('#avatar_user').attr('src', e.target.result);
   	  }

   	  reader.readAsDataURL(this.files[0]);
   	}	
   });
}

//Menampilkan preview dan info gambar
$.fn.uploadGambar = function () { //extending jquery
	this.change(function(event) {
    	if(this.files.length > 0){
    		console.log(this.files[0]);
 			var name = this.files[0].name;
 			var size = this.files[0].size;

 			var ukuran = "";
 			if (size >= 1000000 ) { //MB
 				size = Math.ceil(size/1000000); 
 				ukuran = size + "MB"; 
 			} 
 			else if (size >= 1000) { //KB
 				size = Math.ceil(size/1000);
 				ukuran = size + "KB";
 			}
 			else if(size < 1000){
 				ukuran = size + "Byte";
 			}
 			
 			$("#file_info").html(`
				<div class="tam_nama"> 
			 	<p>Nama File : `+name+`</p>
				 <p>Ukuran File : `+ukuran+`</p>
				 </div>
 				`
 			);
    		
    		if (this.files && this.files[0]) {
    		  var reader = new FileReader();

    		  reader.onload = function(e) {
    		    $('#avatar_img').show();
    		    $('#avatar_img').attr('src', e.target.result);
    		  }

    		  reader.readAsDataURL(this.files[0]);
    		}
    	}
	});
}

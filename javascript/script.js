function cartDropdown () {

	if (document.getElementById('cart_display').style.display === "none") {

		document.getElementById('cart_display').style.display = "block";
		document.getElementById('account_display').style.display = "none";

	} else {

		document.getElementById('cart_display').style.display = "none";

	}

}

function myAccount () {

	if (document.getElementById('account_display').style.display === "none") {

		document.getElementById('cart_display').style.display = "none";
		document.getElementById('account_display').style.display = "block";

	} else {

		document.getElementById('account_display').style.display = "none";

	}

}

function showMenu () {

	if (document.getElementById('showMenu').style.display === "none") {

		document.getElementById('showMenu').style.display = "block";

	} else {

		document.getElementById('showMenu').style.display = "none";

	}

}

function showHome () {

	if (document.getElementById('showHome').style.display === "none") {

		document.getElementById('showHome').style.display = "block";
		document.getElementById('showProducts').style.display = "none";
		document.getElementById('showBrands').style.display = "none";
		document.getElementById('showPages').style.display = "none";
		document.getElementById('showComponents').style.display = "none";
		document.getElementById('showBlog').style.display = "none";

	} else {

		document.getElementById('showHome').style.display = "none";

	}

}

function showProducts () {

	if (document.getElementById('showProducts').style.display === "none") {

		document.getElementById('showHome').style.display = "none";
		document.getElementById('showProducts').style.display = "block";
		document.getElementById('showBrands').style.display = "none";
		document.getElementById('showPages').style.display = "none";
		document.getElementById('showComponents').style.display = "none";
		document.getElementById('showBlog').style.display = "none";

	} else {

		document.getElementById('showProducts').style.display = "none";

	}
	
}

function showBrands () {

	if (document.getElementById('showBrands').style.display === "none") {

		document.getElementById('showHome').style.display = "none";
		document.getElementById('showProducts').style.display = "none";
		document.getElementById('showBrands').style.display = "block";
		document.getElementById('showPages').style.display = "none";
		document.getElementById('showComponents').style.display = "none";
		document.getElementById('showBlog').style.display = "none";

	} else {

		document.getElementById('showBrands').style.display = "none";

	}

}

function showPages () {

	if (document.getElementById('showPages').style.display === "none") {

		document.getElementById('showHome').style.display = "none";
		document.getElementById('showProducts').style.display = "none";
		document.getElementById('showBrands').style.display = "none";
		document.getElementById('showPages').style.display = "block";
		document.getElementById('showComponents').style.display = "none";
		document.getElementById('showBlog').style.display = "none";

	} else {

		document.getElementById('showPages').style.display = "none";

	}

}

function showComponents () {

	if (document.getElementById('showComponents').style.display === "none") {

		document.getElementById('showHome').style.display = "none";
		document.getElementById('showProducts').style.display = "none";
		document.getElementById('showBrands').style.display = "none";
		document.getElementById('showPages').style.display = "none";
		document.getElementById('showComponents').style.display = "block";
		document.getElementById('showBlog').style.display = "none";

	} else {

		document.getElementById('showComponents').style.display = "none";

	}

}

function showBlog () {

	if (document.getElementById('showBlog').style.display === "none") {

		document.getElementById('showHome').style.display = "none";
		document.getElementById('showProducts').style.display = "none";
		document.getElementById('showBrands').style.display = "none";
		document.getElementById('showPages').style.display = "none";
		document.getElementById('showComponents').style.display = "none";
		document.getElementById('showBlog').style.display = "block";

	} else {

		document.getElementById('showBlog').style.display = "none";

	}

}
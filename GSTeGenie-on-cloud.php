<?php include("include/header.php"); ?>
<div class="fullwidth">
  <div class="secure-print-banner-section">
        <img src="assets/images/inside-banner.jpg" class="img-responsive">
  </div>

  <section id="reservation-section" class="fullwidth">
  			<div class="container">
  				<div class="title-section">
  					<!-- <h1>Enquire Now</h1> -->
  				</div>
  				<div class="col-md-5 col-sm-5 reg-img">
  					<img src="assets/images/register-left-img.jpg" alt="">
  				</div>
  				<div class="col-md-7 col-sm-7">
  				<div class="reservation-box">
  					<div class="required-text"><p>Fields marked with <span class="req-field-star">*</span> are mandatory.</p></div>
  					<div class="error-div" id="error-div" style="display:none;"></div>
  					<form class="reservation-form" action="apply-act.php" method="post" name="enquiry" id="enquiry" onsubmit="return validate_form(this);" enctype="multipart/form-data">
  						<div class="row">
  							<div class="col-sm-6">
  								<label for="fname">Name <span class="req-field">&nbsp;</span></label>
  								<input name="frmname" id="frmname" type="text">
  							</div>
  							<div class="col-sm-6">
  								<label for="phone-number">Email <span class="req-field">&nbsp;</span></label>
  								<input name="frmemail" id="frmemail" type="text">
  							</div>
  						</div>
  						<div class="row">
  							<div class="col-sm-6">
  								<label for="lname">Mobile number <span class="req-field">&nbsp;</span></label>
  								<input name="frmmobile" id="frmmobile" type="text">
  							</div>

  							<div class="col-sm-6">
  								<!-- <label for="pattient">Company Name <span class="req-field">&nbsp;</span></label>
  								<input name="frmcompanyname" id="frmcompanyname" type="text"> -->
  								<label for="pattient">Category <span class="req-field">&nbsp;</span></label>
  								<select name="customer_type" id="customer_type">
  									<option value="">Select Category</option>
  									<option value="Corporate">Channel Partner</option>
  									<option value="Tax Consultant">Facilitation Center</option>
  									<option value="SME">Channel CA</option>
  									<option value="Aggregator">Chartered Accountant</option>
  									<option value="Business Owner">End User Tax Payer</option>
  								</select>
  							</div>
  						</div>
  						<div class="row">
  							<div class="col-sm-12">
  								<label for="pattient">Company Name <span class="req-field">&nbsp;</span></label>
  								<input name="frmcompanyname" id="frmcompanyname" type="text">
  							</div>
  						</div>
  						<div class="row">
  						<div class="col-sm-6">
  						<label for="message">Company Address</label>
  						<textarea name="frmcompanyaddress" id="frmcompanyaddress"></textarea>
  						</div>
  						<div class="col-sm-6 captcha-code-part">
  									<label for="pattient">Enter Security Code</label>
  									<input name="security_code" id="security_code" type="text" size="5" class="form-textfield captcha-field">
  									<img src="assets/images/random.jpg" alt="CAPTCHA IMAGE" class="captcha">
  								</div>
  						</div>

  						<div class="row">
  						<div class="col-sm-12">
                <div class="contactbtn enqueryfiled">
                  <button>Enquire</button>
                </div>
  						</div>
  						</div>
  					</form>
  				</div>
  				</div>

  			</div>

  		</section>

</div>
  <?php include("include/footer.php"); ?>

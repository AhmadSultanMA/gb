// get all data in form and return object
function getFormData(form) {
  var elements = form.elements;
  var honeypot;

  var fields = Object.keys(elements).filter(function (k) {
    if (elements[k].name === "honeypot") {
      honeypot = elements[k].value;
      return false;
    }

    return true;
  }).map(function (k) {
    if (elements[k].name !== undefined) {
      return elements[k].name;
      // special case for Edge's html collection
    } else if (elements[k].length > 0) {
      return elements[k].item(0).name;
    }
  }).filter(function (item, pos, self) {
    return self.indexOf(item) == pos && item;
  });

  var formData = {};
  fields.forEach(function (name) {
    var element = elements[name];

    // singular form elements just have one value
    formData[name] = element.value;
    // when our element has multiple items, get their values
    if (element.length) {
      var data = [];
      for (var i = 0; i < element.length; i++) {
        var item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(', ');
    }
  });

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  // formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
  formData.formGoogleSendEmail
    = form.dataset.email || ""; // no email by default

  return { data: formData, honeypot: honeypot };
}

function uploadFile(event) {
  // event.preventDefault();
  $("#loadMe").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  var reader = new FileReader();
  var file = document.getElementById('attach').files[0];
  reader.onload = function () {
    document.getElementById('fileContent').value = reader.result;
    document.getElementById('filename').value = file.name;
    // document.getElementById('regmitra').submit()
    handleFormSubmit(event)
  }
  reader.readAsDataURL(file)
}


function uploadFile1(event) {
  // event.preventDefault();
  $("#loadMe").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
  handleFormSubmit(event)
}


function handleFormSubmit(event) {
  // event.preventDefault();           // we are submitting via xhr below
  // var form = event.target;
  var form = event
  var formData = getFormData(form);
  var data = formData.data;

  // If a honeypot field is filled, assume it was done so by a spam bot.
  if (formData.honeypot) {
    return false;
  }

  if (data['lainnya']) {
    if (!data['kategori[]']) {
      data['kategori[]'] = data['lainnya']
    } else {
      data['kategori[]'] = data['kategori[]'] + ', ' + data['lainnya']
    }
  }

  // disableAllButtons(form);
  var url = form.action;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    // todo: cors handlers errors?
    // if (xhr.readyState === 4 && xhr.status === 200) {
    if (xhr.readyState === 4) {
      form.reset();
      var formElements = form.querySelector("#regist-mitra")
      if (formElements) {
        formElements.style.display = "none"; // hide form
      }
      var errorMessage = form.querySelector(".error_message");
      if (errorMessage) {
        errorMessage.style.display = "none";
      }
      var thankYouMessage = form.querySelector(".thankyou_message");
      if (thankYouMessage) {
        // smooth scroll to element and align it at the bottom
        thankYouMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });
        thankYouMessage.style.display = "block";
      }
      $("#loadMe").modal("hide");
    } else {
      var errorMessage = form.querySelector(".error_message");
      if (errorMessage) {
        errorMessage.style.display = "block";
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
      $("#loadMe").modal("hide");
    }


  };
  // url encode form data for sending as post data
  var encoded = Object.keys(data).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
  }).join('&');
  xhr.send(encoded);
}

function loaded() {
  // bind to the submit event of our form
  var forms = document.querySelectorAll("form.gform");
  var uploadField = document.getElementById('attach');
  var errorSize = document.querySelector(".error_size_message");

  uploadField.onchange = function () {
    if (this.files[0].size > 2000000) {
      document.getElementById('fileContent').value = "";
      document.getElementById('filename').value = "";
      // errorSize.innerHTML = this.files[0].size
      if (errorSize) {
        errorSize.style.display = "block";
        errorSize.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
      this.value = "";
    } else {
      if (errorSize) {
        errorSize.style.display = "none";
      }
    }
  };

  for (var i = 0; i < forms.length; i++) {

    // forms[i].addEventListener("submit", handleFormSubmit, false);
    // forms[i].addEventListener("submit", uploadFile, false);
  }
};
document.addEventListener("DOMContentLoaded", loaded, false);

function disableAllButtons(form) {
  var buttons = form.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}
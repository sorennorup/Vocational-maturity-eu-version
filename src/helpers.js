
function firstLoad(popup_object) {
    if(sessionStorage.getItem('firstload') === null) {
      sessionStorage.setItem('firstload', true);
      document.getElementById('print-body').innerHTML = popup_object;
    }
  
};

function setProfileOnFirstLoad() {
  if(sessionStorage.getItem('profile_id') === null){
    profile_id = 1;
    sessionStorage.setItem('profile_id',1);
    return profile_id;
  }
}

function changeButtonOnLastQuestion() {
  if(id == 6) {
    $(".sub").val('Zakljuèi').css('background-color','#2c2e3a');
  }
}

function hideQuestionBodyOnSubmitEnd() {
  if (id > 6) {
    $('#questionnaire').hide();
    $('#result-container').css('background','#fff');
    }
}

function hideInsertsOnSubmitEnd() {
  $('#questionnaire').hide();
  $('#result-container').css('background','#fff');
}

function addBackground() {
  $('#accordion__heading').addClass('accordion__heading_background');
  $('#collapse-id').addClass('accordion__minus').removeClass('accordion__plussign');
}

function removeBackground() {
  $('#accordion__heading').removeClass('accordion__heading_background');
  $('#collapse-id').removeClass('accordion__minus').addClass('accordion__plussign');
}
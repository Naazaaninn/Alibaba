try { 
	webengage.survey.onSubmit(function (data) {
    if (data.surveyId === '~162i69k') {
        var email, phone;
        for (var i = 0; i < data.questionResponses.length; i++) {

            for (var keys in data.questionResponses[i].value.values) {

                if (keys === "ایمیل") {
                    email = data.questionResponses[i].value.values[keys];
                }
                if (keys === "تلفن همراه") {
                    phone = data.questionResponses[i].value.values[keys];
                }
            }
        }

        if (webengage && webengage.state && (typeof webengage.state.getForever === 'function') && (webengage.state.getForever().cuid === null || webengage.state.getForever().cuid === undefined) && (phone !== null)) {
            //webengage.user.login(phone);
             webengage.user.setAttribute({
                "we_email": email,
                "we_phone": phone,
                "isLead": true
            });
          webengage.track('Lead Form Submitted', {
            "we_email": email,
             "we_phone": phone,
             "isLead": true, 
            "surveyId" : data.surveyId, 
            "title" : data.title, 
            "customData": data.customData
          });
        }
        else {
            webengage.user.setAttribute({
                "isLead": true
            });
        }
    }
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'i2l1kll');
	 }
 }

$(function() {
  let token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODU0ODkyMDgsImV4cCI6MTU4NTQ5MjgwOCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoia3VuemUueml0YSJ9.W9knR6PHDK5q_C_7M1r_23evjJAP_gCHij67nUfF9r3qaainF-wkW3xf7AAZrm5RQ8fxw4_WcjZFH21p-Vgfj_BfEsQ-v8kMXT7IkTU5qBrveFMXLnXgXHcqv4Bw08nbdMCl6zE5uodjnfcG1FBlRwJ2B8O6CdukFDDNE78ONXN1Y4kGO3pqRABAh4F1nCMmXRRUT5LbEHeLyyrHLy1RkHzmfIcJTMsHji8_H_OFtJg_gxVBgznUEdgfYUBv87s3goFW3gVJOMgXgFHrRg4bWIEMlfmqyQ9ng1R6dKG4HtkVS7fAaESHG0KtMttyGEYttF8yMt4EziAUdojVl99j8YZuvnr_GsXpQBf5WkHJU655nQgHJYqsxJZC8Tvv4LrdkrenlZNTl_E_Xyaxd60AJcL80mPY17zpvJWqWTw0XcqgQaPEXYvoSCl7JOATi9-buIsFrszVWyWdnfTtOzjtm3VQSZuxoSEY8bM3FNuhfJyDqcOdBzGC9d7q8hEkvp_Ud5ifDa_FTvItQCXVscdflS2OwcCWCWkLQukIjCu1M20cxhZ25MFeg_1I-JMebFP09KweZLbRDG9-vHxAi1NZft1OBvHVIJeSBvWWKQefticVugkFmwuR4n1lMqNq6B6dRUAIu67esfBNcsmHyv3mBhDb1ruvpPGX9E66RKEczM8';
  $.ajax({
    method: "GET",
    url: "http://0.0.0.0:8081/api/books",
    contentType: 'json',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', token);
    },
    success: function(data) {
      console.log(data);
    },
  });
});

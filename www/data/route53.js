{
    "quiz": {
        "Id": 1,
        "name": "Route53 Quiz",
        "description": "",
        "logo" : "data/img/Route53.png"
    },
    "questions": [{
        "Id": 1010,
        "Name": "Route 53 does not support wild card entries",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes. It does", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Yes, but only for a few record types", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "No.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Yes. And for all record types.", "IsAnswer": true }]
    },
    {
        "Id": 1011,
               "Name": "Which of the following record types does Route 53 support?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A) MX (mail exchange record) only", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "B) AAAA (IPv6 address record) only", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Only A", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Only B", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Both A and B", "IsAnswer": true }]
    
        
    },
    {
        "Id": 1012,
                "Name": "Which of the following will match the queries for *.example.com?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "example.subdomain.com", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "subdomain.example.com", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "www.subdomain.com", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "example.domain.com", "IsAnswer": false }]
        
    },
    {
        "Id": 1013,
               "Name": "Route53 does not allow alias records with subdomains.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": false }]
        
    },
    {
        "Id": 1014,
               "Name": "What is the default TTL for the various record types in Route53?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "60 seconds", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1 hour", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "24 hours", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Route 53 does not have a default TTL for any record type. You must always specify a TTL for each record.", "IsAnswer": true }]
        
    },
    {
        "Id": 1015,
               "Name": "A health check returns HTTP 3xx response. Will Route53 follow the redirect?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes. Your server will be redirected to the new url returned in 3xx.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "No. Route 53 health checks consider an HTTP 3xx code to be a successful response, so they don’t follow the redirect.", "IsAnswer": true }]
        
    },
    {
        "Id": 1016,
               "Name": "For which of the following does Route53 not support health check?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "HTTP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "HTTPS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "TCP", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "FTP", "IsAnswer": true }]
        
    },
    {
        "Id": 1017,
               "Name": "With respect to Route53 what or who is Gandi?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Indian Freedom Fighter", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A registrar whos reseller is Amazon.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Best selling movie on Amazon Prime", "IsAnswer": false }]
        
    },
    {
        "Id": 1018,
              "Name": "What is the limit on the number of domains you can manage using Route53?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "10", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "100", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "50", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "20", "IsAnswer": false }]
        
    },
    {
        "Id": 1019,
               "Name": "You cannot create more domains once your limit on the account is reached.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Correct.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You need to submit a request to Amazon for a higher limit.", "IsAnswer": true }]
        
    }]
}
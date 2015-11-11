{
    "quiz": {
        "Id": 2,
        "name": "RDS Quiz",
        "description": "",
        "logo" : "data/img/RDS.png"
    },
    "questions": [{
        "Id": 1010,
        "Name": "Which of the following database engines is not suported by AWS?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "MariaDB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "PostgreSQL", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Aurora", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "DB2", "IsAnswer": true}]
    },
    {
        "Id": 1011,
               "Name": "Which of the following is not true?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon RDS enables you to run a fully featured relational database while offloading database administration", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AMIs on Amazon EC2 allows you to operate your own relational database in the cloud.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AMIs on Amazon EC2 allows you to operate only the Aurora database in the cloud..", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": " Amazon DynamoDB is a fully managed NoSQL database service that offers fast and predictable performance with seamless scalability;", "IsAnswer": false }]
    
        
    },
    {
        "Id": 1012,
               "Name": "The Point-In-Time-Restore and Snapshot Restore features of Amazon RDS for MySQL require a crash-recoverable storage engine and are supported for _______ storage engine only.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "MyISAM", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "InnoDB", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "MongoDB", "IsAnswer": false }]
        
    },
    {
        "Id": 1013,
               "Name": "_________storage engine does not support reliable crash recovery and may result in lost or corrupt data when MySQL is restarted after a crash, preventing Point-In-Time-Restore or Snapshot restore from working as intended.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "MyISAM", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "InnoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "MongoDB", "IsAnswer": false }]
        
    },
    {
        "Id": 1014,
        "Name": "Federated Storage Engine is currently not supported by Amazon RDS for MySQL.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 1015,
                "Name": "Which of the following is not the correct choice for the storage type:",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "High-performance OLTP workloads -  Amazon RDS Provisioned IOPS (SSD) Storage", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Database workloads with moderate I/O requirements - Amazon RDS General Purpose (SSD) Storage", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Small database workloads with infrequent I/O - Amazon RDS General Purpose (SSD) Storage", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Small database workloads with infrequent I/O -  Amazon RDS Magnetic Storage", "IsAnswer": false }]
        
    },
    {
        "Id": 1016,
               "Name": "Which of the following can you NOT use to access the capabilities of a production-ready relational database in minutes.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Management Console", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon RDS Command Line Interface, ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "API calls", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Bootstrap scripts", "IsAnswer": true }]
        
    },
    {
        "Id": 1017,
               "Name": "You need to enable backups for your DB Instance as it is not done automatically",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": false }]
        
    },
    {
        "Id": 1018,
               "Name": "Where are your automated backups and DB Snapshots stored?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "EBS volumes", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "RDS instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Private EC2 instances", "IsAnswer": false }]
        
    },
    {
        "Id": 1019,
              "Name": "DB Snapshots or automated backups can be taken of Read Replicas.",  
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": false }]
        
    }]
}
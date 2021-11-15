## User Creation
```sh 
curl --location --request POST 'http://localhost:5000/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name" : "Sample User",
    "email" : "sample@email.com",
    "password" : "samplePassword"
}'
```

## User Login
```sh
curl --location --request POST 'http://localhost:5000/api/users/login' \
--header 'Authorization: Bearer <Token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email" : "sample@email.com",
    "password" : "samplePassword"
}'
```

## User Get Profile
```sh
curl --location --request GET 'http://localhost:5000/api/users/profile' \
--header 'Authorization: Bearer <Token>'
```

## User Update Profile
```sh
curl --location --request PUT 'http://localhost:5000/api/users/profile' \
--header 'Authorization: Bearer <Token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name" : "Sample User Edited"
}'
```

## File upload 
```sh
curl --location --request POST 'http://localhost:5000/api/files/sampleUpload' \
--form 'myfile=@"<File Location>"'
```
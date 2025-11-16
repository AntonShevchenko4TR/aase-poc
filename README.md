# Pre-sale Case: Health and Activity Recommender

## Installation

1. **Set Up Environment Variables:**

- Make a copy of the `example.env` file and rename it to `.env`
- Open the `.env` file and set your environment variables

2. **Install Dependencies:**

   ```
   npm install
   ```

3. **Start Client and Server:**

   ```
   npm run dev
   ```

4. **Open the App:**
   ```
   http://localhost:5173
   ```

## The Customer

FunWithActivity is a big company who is a world leader in the area of health applications. They finally decided that they're going to crash the fitness trackers and health monitors market by creating best in class application that is going to work with any physical hardware available on the market as well as provide state-of-the-art tips and recommendations on behaviour. Think about getting advice on the sleeping patterns, how much water to drink, how many push-ups to do, etc

## PoC Requirements

- PoC should allow interacting with services provided
- For POC purposes, all required data could be asked in application UI
- Application should be demoable; consider C-level executives to be reviewing this POC

## Technical considerations

- The customer has plans to create solution; data platform should be a cloud-native solution. They are looking for well-reasoned guidance regarding which cloud provider would fit them best. They expect to have all required environments, CI/CD pipelines, databases in the cloud of the one of top cloud vendors;
- Preferable platform is technology of your choice;
- The customer expects our solution to be same tech quality as the code that you write in your day-to-day job;
- The customer expects our solution will have no 3rd-party components; however, we are free to use open source libs (we do not expect to write json parsing on our own);

## Expectations

- We have a scheduled meeting with the customer people — project managers, the architect and a technical lead, where high level architecture will be presented by you and discussed
- They will definitely ask technical questions, and we expect a discussion regarding the solution details and technical implementation;
- They have concerns around how the recommendations will be handled in the application. Please prepare a solution skeleton in your favourite programming language which:
  - have working with multiple activities/healthy tips providers, they shared with us several ones:
    - **[Service1 endpoint](https://a2da22tugdqsame4ckd3oohkmu0tnbne.lambda-url.eu-central-1.on.aws/services/service1)**
    - **[Service2 endpoint](https://a2da22tugdqsame4ckd3oohkmu0tnbne.lambda-url.eu-central-1.on.aws/services/service2)**
    - **[Swagger documentation](https://a2da22tugdqsame4ckd3oohkmu0tnbne.lambda-url.eu-central-1.on.aws/docs)** providing exact format and expected protocol
  - The exposed data model is different for each of the provider:

    **Service 1:**

    ```javascript
    // Input
    {
      "height": 184.0,       // in cm
      "weight": 84.0,        // in kg
      "token": "service1-dev" // session token, currently use constant
    }

    // Output - Success
    [
      {
        "confidence": 0.4,           // 0..1
        "recommendation": "Walk more" // textual recommendation
      }
      // ...
    ]

    // Output - Error
    {
      "errorCode": 13,                     // error code
      "errorMessage": "Invalid user data"  // human-readable error message
    }
    ```

    **Service 2:**

    ```javascript
    // Input
    {
      "measurements": {
        "mass": 184.0,   // in pounds
        "height": 6.036  // in feet
      },
      "birth_date": 1615876858,       // unix time in UTC
      "session_token": "123456789"    // pass unique GUID for each new request
    }

    // Output - Success
    {
      "recommendations": [
        {
          "priority": 750,                               // 1..1000 - higher - more prioritized
          "title": "Have more workouts per day",         // short textual recommendation
          "details": "Workouts help improving your health." // details on recommendation
        }
        // ...
      ]
    }

    // Output - Error
    {
      "code": 13,                      // error code
      "error": "Invalid user data"     // human-readable error message
    }
    ```

  - In your skeleton you should get recommendations data from both endpoints and expose the final list of recommendations in the application. We are expecting skeleton to be written in a similar manner to how you write production code. We're also expecting this to be ready for deployment to cloud environment (ideally deployed into the cloud)

- Artefacts needs to be shared with customer at the end of the day before the session proof of concept and everything else you think will be needed
- Have your skeleton up and running and your favourite IDE open with the skeleton code as they will ask to do some live coding to address their concern around this area so new features may be added to the skeleton on the fly.

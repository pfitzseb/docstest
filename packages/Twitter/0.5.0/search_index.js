var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Twitter-1",
    "page": "Readme",
    "title": "Twitter",
    "category": "section",
    "text": "Linux: (Image: Build Status) <br> Windows: (Image: Build status) <br> CodeCov: (Image: codecov)Twitter.jl is a Julia package to work with the Twitter API v1.1. Currently, only the REST API methods are supported; streaming API endpoints aren\'t implemented at this time."
},

{
    "location": "#Twitter.jl-API-1",
    "page": "Readme",
    "title": "Twitter.jl API",
    "category": "section",
    "text": "All functions have required arguments for those parameters required by Twitter and an options keyword argument to provide a Dict{String, String} of optional parameters Twitter API documentation. Most function calls will return either a Dict or an Array <: TwitterType. Bad requests will return the response code from the API (403, 404, etc.)DataFrame methods are defined for functions returning composite types: Tweets, Places, Lists, and Users."
},

{
    "location": "#Authentication-1",
    "page": "Readme",
    "title": "Authentication",
    "category": "section",
    "text": "Authentication is accomplished by creating an application on dev.twitter.com. Once your application is setup, you can access your consumerkey, consumertoken, oauthtoken and oauthsecret from the \"Details\" tab of the application.Using Twitter\n\ntwitterauth(\"6nOtpXmf...\",\n            \"sES5Zlj096S...\",\n            \"98689850-Hj...\",\n            \"UroqCVpWKIt...\")This package does not currently support OAuth authentication."
},

{
    "location": "#Code-examples-1",
    "page": "Readme",
    "title": "Code examples",
    "category": "section",
    "text": "See runtests.jl for example function calls."
},

{
    "location": "#Contributing/TODO-1",
    "page": "Readme",
    "title": "Contributing/TODO",
    "category": "section",
    "text": "Contributions to Twitter.jl are absolutely welcomed and very appropriate for beginners to Julia! Areas for improvement are identified below, but if you have a different idea, please open an issue (then, create a pull request):General:Incorporate cursoring for methods returning many pages of results (MOST IMPORTANT TO SOLVE)\nClean up API to move away from required arguments to keyword-only\nClean up column types for DataFrame methods (switch eltypes from Any to Union{T, Missing})\nKeyword arguments for returning DataFrame (to remove step in data retrieval process)\nAbility to save authentication keys to file, remove need for authentication each time\nCreate detailed documentation"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Twitter.DataFrameTwitter.ListsTwitter.PlacesTwitter.TWCredentialTwitter.TWITTERCREDTwitter.TweetsTwitter.TwitterTwitter.TwitterTypeTwitter.UsersTwitter.endpoint_tupleTwitter.evalTwitter.get_account_settingsTwitter.get_application_rate_limit_statusTwitter.get_blocks_idsTwitter.get_blocks_listTwitter.get_direct_messagesTwitter.get_direct_messages_sentTwitter.get_direct_messages_showTwitter.get_favorites_listTwitter.get_followers_idsTwitter.get_followers_listTwitter.get_friends_idsTwitter.get_friends_listTwitter.get_friendships_incomingTwitter.get_friendships_lookupTwitter.get_friendships_no_retweetsTwitter.get_friendships_outgoingTwitter.get_friendships_showTwitter.get_geo_id_place_idTwitter.get_geo_reverse_geocodeTwitter.get_geo_searchTwitter.get_geo_similar_placesTwitter.get_help_configurationTwitter.get_help_languagesTwitter.get_help_privacyTwitter.get_help_tosTwitter.get_home_timelineTwitter.get_listsTwitter.get_lists_membersTwitter.get_lists_members_showTwitter.get_lists_membershipsTwitter.get_lists_ownershipsTwitter.get_lists_showTwitter.get_lists_statusesTwitter.get_lists_subscribersTwitter.get_lists_subscribers_showTwitter.get_lists_subscriptionsTwitter.get_mentions_timelineTwitter.get_oauthTwitter.get_oembedTwitter.get_profile_bannerTwitter.get_retweeters_idTwitter.get_retweets_idTwitter.get_retweets_of_meTwitter.get_saved_searches_listTwitter.get_search_tweetsTwitter.get_single_tweet_idTwitter.get_trends_availableTwitter.get_trends_closestTwitter.get_trends_placeTwitter.get_user_suggestionsTwitter.get_user_suggestions_slugTwitter.get_user_suggestions_slug_membersTwitter.get_user_timelineTwitter.get_users_contributeesTwitter.get_users_contributorsTwitter.get_users_lookupTwitter.get_users_searchTwitter.get_users_showTwitter.get_verify_credentialsTwitter.includeTwitter.post_account_remove_profile_bannerTwitter.post_account_settingsTwitter.post_account_update_profile_bannerTwitter.post_blocks_createTwitter.post_blocks_destroyTwitter.post_destroy_single_tweet_idTwitter.post_direct_messages_destroyTwitter.post_direct_messages_sendTwitter.post_favorites_createTwitter.post_favorites_destroyTwitter.post_friendships_createTwitter.post_friendships_destroyTwitter.post_friendships_updateTwitter.post_geo_placeTwitter.post_lists_createTwitter.post_lists_destroyTwitter.post_lists_members_createTwitter.post_lists_members_createallTwitter.post_lists_members_destroyTwitter.post_lists_members_destroy_allTwitter.post_lists_subscribers_createTwitter.post_lists_subscribers_destroyTwitter.post_lists_updateTwitter.post_oauthTwitter.post_status_retweet_idTwitter.post_status_updateTwitter.post_update_delivery_deviceTwitter.post_update_profileTwitter.post_update_profile_backgroundTwitter.post_update_profile_imageTwitter.post_users_report_spamTwitter.twitterauth"
},

]}

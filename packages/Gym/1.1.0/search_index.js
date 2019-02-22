var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Gym-1",
    "page": "Readme",
    "title": "Gym",
    "category": "section",
    "text": "(Image: Build Status)This package provides a julia interface for OpenAi gym."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In pkg repl,add GymIf you do not have a gym installation. The package will install it for you with the following command:build GymThis makes a minimal installation of the gym. If you want to install free environments,  you should set the GYM_ENVS environment variable as following:ENV[\"GYM_ENVS\"]=\"atari:algorithmic:box2d:classic_control\"Then call the build Gym."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using Gym\n\nenv = GymEnv(\"CartPole-v0\")\nreward = 0\nepisode_count = 10\n\nfor i=1:episode_count\n    total = 0\n    ob = reset!(env)\n    render(env)#comment out this line if you do not want to visualize the environment\n    while true\n        action = sample(env.action_space)\n        ob, reward, done, information = step!(env, action)\n        total += reward\n        render(env)#comment out this line if you do not want to visualize the environment\n        done && break\n    end\n    println(\"episode $i total Rewards: $total\")\nend"
},

]}

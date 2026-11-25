export interface Screenshot {
  src: string
  alt: string
}

export const projectCategories = ['Game Development', 'Graphics & Pathfinding', 'AI & Software'] as const
type ProjectCategory = (typeof projectCategories)[number]

type Video = { description: string } & (
  | { src: string; captions?: string }
  | { href: string }
)

interface ResourceLink {
  href: string
  label: string
}

export interface Project {
  slug: string
  title: string
  year: number
  category: string
  categories: ProjectCategory[]
  summary: string
  overview: string
  stack: string[]
  cover?: Screenshot
  screenshots?: Screenshot[]
  video?: Video
  contributions?: string[]
  implementation: string[]
  challenges?: string[]
  outcomes?: string[]
  repository?: string
  demo?: { href: string; kind: 'browser' | 'download' }
  resources?: ResourceLink[]
  featured?: boolean
}

const projectEntries: Project[] = [
  {
    slug: 'bound-spirit',
    title: 'Bound Spirit',
    year: 2026,
    category: 'Puzzle RPG · Capstone',
    categories: ['Game Development'],
    summary: 'A Unity mystery RPG that combines inventory, branching dialogue, and interactive puzzles.',
    overview: 'Bound Spirit is a 2D mystery puzzle RPG about a ghost investigating their own murder. My capstone team at the University of Nevada, Reno built it in Unity, combining a branching story with puzzles inspired by cybersecurity concepts.',
    stack: ['Unity', 'C#', 'Gameplay Systems'],
    screenshots: [
      { src: 'media/projects/bound-spirit/graveyard.webp', alt: 'Bound Spirit gameplay showing the ghost player in a rain-soaked graveyard' },
      { src: 'media/projects/bound-spirit/inventory-ui.webp', alt: 'Bound Spirit inventory bar holding a rose, a key, and a white gem' },
      { src: 'media/projects/bound-spirit/dialogue.webp', alt: 'Bound Spirit dialogue box reading “What... where am I?”' },
    ],
    featured: true,
    repository: 'https://github.com/Snow-Cai/BoundSpirit',
    video: {
      href: 'https://www.youtube.com/watch?v=aNfl_b2h7eg',
      description: 'Watch the Bound Spirit project video on YouTube',
    },
    resources: [
      { label: 'Project website', href: 'https://snow-cai.github.io/BoundSpirit/' },
      { label: 'Capstone poster', href: 'https://snow-cai.github.io/BoundSpirit/images/poster.webp' },
    ],
    contributions: [
      'Developed and integrated gameplay systems, including inventory, dialogue, interactable objects, and save functionality.',
      'Worked on maps, scene transitions, user interfaces, scripts, and animations.',
      'Collaborated on debugging, testing, and documentation.',
    ],
    implementation: [
      'Inventory and interactable objects supported puzzle interactions.',
      'Dialogue, maps, and scene transitions connected gameplay across areas, with save functionality to retain progress.',
    ],
    challenges: [
      'I fixed collected items reappearing on the ground and prevented the inventory from opening during an active puzzle dialogue.',
      'I updated the safe puzzle to consume its key from inventory when used.',
    ],
    outcomes: ['Completed as a University of Nevada, Reno senior capstone from August 2025 to May 2026.'],
  },

  {
    slug: 'vibeai',
    title: 'VibeAI',
    year: 2026,
    category: 'Applied AI · Hackathon',
    categories: ['AI & Software'],
    summary: 'A Unity music app that uses webcam-based emotion estimates to choose Spotify tracks and won its hackathon’s AI category.',
    overview: 'VibeAI is a hackathon project that pairs a Unity client with a Python service for facial expression analysis. The client uses emotion estimates to drive avatar animations and match music through Spotify.',
    stack: ['Python', 'Unity', 'DeepFace', 'Spotify API'],
    screenshots: [
      { src: 'media/projects/vibeai/challenge-mode.webp', alt: 'VibeAI Challenge mode showing a 3D avatar and a target expression with emotion and song indicators' },
    ],
    featured: true,
    repository: 'https://github.com/Snow-Cai/VibeAI',
    contributions: [
      'Added Song Matcher mode and implemented looping avatar animations for its match results.',
      'Updated the webcam interface with mirroring and a full-screen view.',
    ],
    implementation: [
      'A Flask service uses OpenCV and DeepFace to analyze webcam frames. Unity polls the service for emotion estimates over HTTP.',
      'Song Matcher samples emotion estimates, then requests Spotify playback for the resulting match.',
    ],
    challenges: ['I fixed playback pausing after sampling and corrected animations that failed when a match repeated.'],
    outcomes: ['Won first place in the AI category at a 40-hour hackathon in April 2026.'],
  },

  {
    slug: 'solar-system-exploration',
    title: 'Solar System Exploration',
    year: 2026,
    category: '3D Graphics · Course Project',
    categories: ['Graphics & Pathfinding'],
    summary: 'A C++ and OpenGL simulation with spaceship controls, real-time planetary rendering, and orbital inspection cameras.',
    overview: 'Developed as a computer graphics term project at the University of Nevada, Reno, this application allows players to explore a simulated solar system, navigate a spaceship, and observe individual planets. The project explores real-time rendering, lighting, textures, materials, and 3D transformations.',
    stack: ['C++', 'OpenGL', 'GLSL', 'GLFW', 'GLEW', 'GLM', 'Assimp'],
    screenshots: [
      { src: 'media/projects/solar-system-exploration/exploration.webp', alt: 'Third-person view of the spaceship with an asteroid belt and the sun and planets ahead' },
      { src: 'media/projects/solar-system-exploration/planetary-flight.webp', alt: 'Spaceship flying past Saturn’s rings with the sun and other planets in view' },
    ],
    contributions: [
      'Implemented the skybox, the inner and outer asteroid belts, and the comet.',
      'Added ambient lighting and texture-based material colors, and contributed to spaceship movement and controls.',
    ],
    implementation: [
      'The solar system scene contains planets, asteroid belts, a comet, Saturn’s rings, and a skybox.',
      'Planetary rendering uses diffuse textures, normal maps, material properties, and lighting.',
      'Exploration mode uses a third-person camera that follows the spaceship and supports yaw, pitch, roll, and speed controls.',
      'Observation mode provides an orbital camera for inspecting individual planets with zoom and pan controls.',
      'Spaceship thruster effects respond dynamically to acceleration, braking, and movement.',
    ],
    outcomes: [
      'Developed as a team term project for CS 680 Computer Graphics in Spring 2026 at the University of Nevada, Reno.',
    ],
  },

  {
    slug: 'the-8-puzzle',
    title: 'Are You a Human?',
    year: 2025,
    category: 'Sliding Puzzle · Course Project',
    categories: ['Game Development', 'Graphics & Pathfinding'],
    summary: 'A solo Unity browser game where players rebuild scrambled images while keeping a CAPTCHA-style suspicion meter low.',
    overview: 'Are You a Human? is a Unity puzzle game developed for an AI in Games course. Players reconstruct scrambled images by moving tiles into an empty space while managing their suspicion level. Hint and solve features provide assistance but affect the verification experience.',
    stack: ['Unity', 'C#', 'Bidirectional BFS', 'WebGL'],
    repository: 'https://github.com/Snow-Cai/The8Puzzle',
    demo: { href: 'https://mioolm.itch.io/are-you-a-human', kind: 'browser' },
    screenshots: [
      { src: 'media/projects/the-8-puzzle/sliding-puzzle.webp', alt: 'Numbered sliding puzzle tiles scramble an image in a retro CAPTCHA window' },
      { src: 'media/projects/the-8-puzzle/instructions.webp', alt: 'Instructions dialog over the sliding puzzle board' },
      { src: 'media/projects/the-8-puzzle/verification.webp', alt: 'Verification result confirming that the player is human' },
    ],
    featured: true,
    contributions: [
      'Independently developed the game using Unity and C#.',
      'Implemented sliding puzzle interactions and verification mechanics.',
      'Designed a browser-friendly interface supporting desktop and mobile input.',
    ],
    implementation: [
      'The puzzle allows players to move adjacent tiles into an empty space to reconstruct an image.',
      'Separate game, tile, verification, and audio components manage gameplay functionality.',
      'The hint and solve features use bidirectional breadth-first search, and requesting help affects the suspicion meter.',
      'The interface supports both mouse and touch input.',
    ],
    outcomes: [
      'Developed for CS 681 AI in Games class in Fall 2025.',
      'Designed to support browser-based gameplay on desktop and mobile devices.',
    ],
  },

  {
    slug: 'roadsense-car-driving-school',
    title: 'RoadSense Car Driving School',
    year: 2025,
    category: 'Driving Simulation · Course Project',
    categories: ['Game Development', 'Graphics & Pathfinding'],
    summary: 'A Unity driving simulator that scores players on traffic rules and uses AI to control other cars.',
    overview: 'RoadSense is a 3D driving prototype I built with Tristan Hughes for CS 681 AI in Games. Players practice steering, braking, and signaling while the game tracks traffic violations and scores each lesson.',
    stack: ['Unity', 'Potential Fields', 'Finite State Machines'],
    demo: { href: 'https://www.tristanhughes.com/projects/roadsense-car-driving-school', kind: 'browser' },
    screenshots: [
      { src: 'media/projects/roadsense-car-driving-school/title-screen.webp', alt: 'RoadSense title screen with a car driving past low-poly houses and Start, Credits, and Exit buttons' },
    ],
    contributions: [
      'Developed potential-field steering for AI traffic and obstacle avoidance.',
      'Co-designed gameplay and helped produce the prototype with Tristan Hughes.',
    ],
    implementation: [
      'Potential fields guide vehicles toward their lane and next waypoint while steering them away from nearby hazards.',
      'Finite state machines control when AI traffic drives, stops, or waits.',
      'The scoring system tracks driving violations and evaluates player performance.',
    ],
    outcomes: ['Completed for CS 681 AI in Games in fall 2025 and released as a browser-playable prototype.'],
  },

  {
    slug: 'group-movement-pathfinding',
    title: 'Group Movement & Pathfinding Simulation',
    year: 2025,
    category: 'Pathfinding · Course Project',
    categories: ['Graphics & Pathfinding'],
    summary: 'A Unity simulation that uses A*, RRT, and potential-field steering to move groups of agents around obstacles.',
    overview: 'This Unity project explores group movement and pathfinding through algorithm implementation and simulation.',
    stack: ['Unity', 'A*', 'RRT', 'Potential Fields'],
    screenshots: [
      { src: 'media/projects/group-movement-pathfinding/simulation-menu.webp', alt: 'Pathfinding simulation setup menu with algorithm, obstacle count, and environment options' },
    ],
    featured: true,
    repository: 'https://github.com/Snow-Cai/A-plus-RRT-pathfinding',
    contributions: [
      'Implemented multiple simulation environments and added a free-play mode.',
      'Integrated obstacle handling and potential-field navigation into the game mode.',
      'Debugged agents getting stuck on RRT routes and improved navigation in the office environment.',

    ],
    implementation: [
      'The simulation uses grid-based A* and rapidly exploring random trees (RRT) for route planning.',
      'Potential-field steering combines attraction to the target with repulsion from obstacles and nearby agents.',
      'The performance tracker records search time, success, and algorithm-specific measures such as A* node counts and RRT iterations.',
    ],
    outcomes: ['Developed for CS 681 AI in Games in fall 2025.'],
  },

  {
    slug: 'hci-okey',
    title: 'Okey!',
    year: 2025,
    category: 'Rhythm Game · Course Project',
    categories: ['Game Development'],
    summary: 'A Unity rhythm game that combines timed typing, practice modes, and performance feedback.',
    overview: 'Okey! is a Unity rhythm typing game I made for a Human-Computer Interaction course. Players can take a baseline typing test, practice, or choose a song and type in time with the beat. The results screen gives feedback on speed, accuracy, and timing.',
    stack: ['Unity', 'C#', 'HCI', 'UI Development', 'Input Systems'],
    repository: 'https://github.com/Snow-Cai/HCI-Okey',
    demo: { href: 'https://mioolm.itch.io/okey-rhythm-based-typing-game', kind: 'browser' },
    cover: { src: 'media/projects/hci-okey/rhythm-mode.webp', alt: 'Okey! rhythm gameplay in progress with typing prompts, timing feedback, and a combo meter' },
    screenshots: [
      { src: 'media/projects/hci-okey/title-screen.webp', alt: 'Okey! Rhythm Typing Test Game title screen with Start, Settings, Credits, and Exit' },
      { src: 'media/projects/hci-okey/song-selection.webp', alt: 'Okey song selection screen with three songs and difficulty levels' },
      { src: 'media/projects/hci-okey/typing-test.webp', alt: 'Okey typing test results showing words per minute' },
    ],
    contributions: [
      'Built the baseline typing test and rhythm gameplay in Unity.',
      'Implemented prompt shuffling, song selection, and the game’s music and sound playback.',
      'Designed the game screens and refined scoring and early or late timing feedback.',
    ],
    implementation: [
      'Separate controllers manage baseline typing and rhythm-based gameplay.',
      'A practice hub provides access to practice activities.',
      'Song selection and music management components support the rhythm gameplay experience.',
      'Results and settings controllers manage performance feedback and user configuration.',
      'Dedicated menu and gameplay controllers organize navigation between application screens.',
    ],
    outcomes: [
      'Developed for CS 620 Human-Computer Interaction class in Fall 2025.',
      'Designed to support browser-based gameplay on desktop and mobile devices.',
      'Released as a playable HTML5 game on itch.io.',
    ],
  },

  {
    slug: 'touch-grass',
    title: 'Touch Grass',
    year: 2025,
    category: 'Narrative Adventure · Hackathon',
    categories: ['Game Development'],
    summary: 'A collaborative Unity adventure where players help a sapling grow through dialogue and three environmental minigames.',
    overview: 'Touch Grass is a collaborative hackathon project centered on environmental awareness. Players care for a sapling through watering, collecting sunlight, and cleaning polluted land, helping it grow while progressing through its story.',
    stack: ['Unity', 'C#', 'Gameplay Systems'],
    demo: { href: 'https://mioolm.itch.io/touch-grass', kind: 'browser' },
    cover: { src: 'media/projects/touch-grass/title-screen.webp', alt: 'Touch Grass title screen with a pixel-art meadow and Play, Credits, and Quit buttons' },
    screenshots: [
      { src: 'media/projects/touch-grass/watering.webp', alt: 'Touch Grass watering minigame showing a potted sapling beside a pixel-art tree' },
      { src: 'media/projects/touch-grass/sunlight-tutorial.webp', alt: 'Touch Grass tutorial explaining how to catch falling sunlight' },
    ],
    contributions: [
      'Co-developed the Unity game as part of a four-person hackathon team.',
      'Shared the team’s playable browser prototype through my itch.io profile.',
    ],
    implementation: [
      'Three interactive mini-games represent different environmental processes.',
      'Narrative dialogue responds to player successes and failures.',
      'Gameplay progression connects mini-game interactions with the growth of the sapling.',
    ],
    outcomes: [
      'Developed collaboratively during the 2025 Biggest Little Hackathon at UNR.',
      'Published as a playable browser game on itch.io.',
    ],
  },

  {
    slug: 'gmtk-game-jam',
    title: 'Sunset and Firefly',
    year: 2025,
    category: 'Strategy & Building · Game Jam',
    categories: ['Game Development', 'Graphics & Pathfinding'],
    summary: 'A Unity strategy game where players gather resources, build structures, and upgrade their ship.',
    overview: 'Sunset and Firefly is a collaborative Unity game made for the 2025 GMTK Game Jam. Its systems include grid-based construction, resource management, ship upgrades, enemies, and map generation.',
    stack: ['Unity', 'C#', 'Gameplay Systems'],
    repository: 'https://github.com/WeUseCrrtzzz/GMTKJamGame',
    demo: { href: 'https://abdullah33.itch.io/sunset-and-firefly', kind: 'browser' },
    cover: { src: 'media/projects/gmtk-game-jam/title-screen.webp', alt: 'Sunset and Firefly title screen with a star field behind the Start, Options, and Quit buttons' },
    screenshots: [
      { src: 'media/projects/gmtk-game-jam/construction.webp', alt: 'Sunset and Firefly game screen showing a construction grid, resource controls, and three jump options' },
    ],
    contributions: [
      'Worked on map generation and the ship-jump system, integrated prefabs, and tested the game.',
      'Added ship upgrade features and fixed construction timing after upgrades.',
      'Built the main and pause menus and added scene and music management.',
    ],
    implementation: [
      'Grid-based placement snaps structures to valid positions and checks for collisions.',
      'Building and resource components drive construction and collection.',
      'Separate components manage ship upgrades, enemies, and map generation.',
    ],
    outcomes: [
      'Created collaboratively for the 2025 GMTK Game Jam.',
      'Released as a playable browser game on itch.io.',
    ],
  },

  {
    slug: 'before-its-too-late',
    title: 'Before It’s Too Late',
    year: 2025,
    category: 'Narrative Adventure · Game Jam',
    categories: ['Game Development'],
    summary: 'A narrative game where players race the clock to confess their feelings, with choices that lead to different endings.',
    overview: 'Snow Cai and Ava Chong made Before It’s Too Late for the 2025 UNR ACM Game Jam. Players navigate a story about confessing to a childhood crush while making choices that affect the outcome.',
    stack: ['Unity', 'C#', 'Game Design', 'Narrative Systems'],
    screenshots: [
      { src: 'media/projects/before-its-too-late/title-screen.webp', alt: 'Before It’s Too Late title screen with a bus, a market stall, and Play, Credits, and Exit buttons' },
    ],
    contributions: [
      'Implemented the core gameplay loop, event spawning, and scene movement.',
      'Built the ending logic and added dialogue transitions and portraits that change with the scene.',
      'Created the main menu artwork and added pause controls and button sounds.',
    ],
    implementation: [
      'Player state tracks remaining time, karma, dirtiness, and story conditions.',
      'The ending system selects an outcome based on player stats and choices.',
      'Event and dialogue systems coordinate story interactions.',
      'Separate controllers manage movement, progression, and scene transitions.',
    ],
    outcomes: ['Created collaboratively for the 2025 UNR ACM Game Jam.'],
  },

  {
    slug: 'cs484-final-project',
    title: 'Escape the House',
    year: 2025,
    category: 'VR Escape Room · Course Project',
    categories: ['Game Development'],
    summary: 'A VR escape-room prototype where players solve puzzles in a furnished bedroom to meet the conditions for escape.',
    overview: 'Escape the House is a VR escape-room prototype built for CS 484 Virtual Reality at the University of Nevada, Reno. The furnished bedroom serves as the puzzle environment. My role covered the full puzzle experience, from deciding what players needed to solve to defining when the game counted the room as escaped.',
    stack: ['Virtual Reality', 'Puzzle Design', '3D Scene Design'],
    screenshots: [
      { src: 'media/projects/cs484-final-project/bedroom-scene.webp', alt: 'Cutaway editor view showing a bed and nightstand on the left, a patterned rug in the center, and a table and desk along the far wall' },
    ],
    contributions: [
      'Designed and built all of the escape-room puzzles.',
      'Placed the puzzle objects throughout the room and arranged them within the 3D scene.',
      'Implemented the win conditions that determine when the player has completed the escape.',
    ],
    implementation: [
      'Hints placed around the room help players discover a passcode. The keypad constrains input and shows the digits the player enters.',
      'Furniture and other objects have interaction behaviors so players can engage with them in VR.',
      'The HUD and text displays provide feedback during play, including door status.',
      'The final door is part of the escape sequence, and the win conditions determine when the escape is complete.',
      'A separate Unity tutorial scene introduces the player to the experience.',
    ],
    outcomes: ['Completed as a CS 484 Virtual Reality final project in spring 2025.'],
  },

  {
    slug: 'herd-the-sheep',
    title: 'Herd the Sheep',
    year: 2025,
    category: 'Turn-Based Strategy · Course Project',
    categories: ['Game Development', 'Graphics & Pathfinding'],
    summary: 'A turn-based Unity game where players compete with an AI opponent to guide sheep into their pen using attractors and repellers.',
    overview: 'Herd the Sheep is a 3D strategy game built for CS 681 AI in Games. On each turn, players place forces on a grid to pull or push the flock toward their pen. I led the overall gameplay work and created the maps and visuals.',
    stack: ['Unity', 'C#', 'Potential Fields', 'Minimax AI'],
    repository: 'https://github.com/Marlo-Ong/CS481-Project-1',
    demo: { href: 'https://mioolm.itch.io/herd-the-sheep#download', kind: 'download' },
    screenshots: [
      { src: 'media/projects/herd-the-sheep/title-screen.webp', alt: 'Herd the Sheep title screen with sheep behind a wooden fence' },
    ],
    contributions: [
      'Led gameplay development and built the maps, including their layouts and visual themes.',
      'Sourced and integrated sheep, fence, and audio assets, and created the credits screen.',
      'Implemented the guided tutorial and built the start, pause, level selection, and win screens.',
      'Implemented the audio manager for music and sound effects.',
    ],
    implementation: [
      'Potential fields simulate how sheep respond to attractors, repellers, and one another.',
      'The turn controller runs the flock simulation after placement and then passes control to the next player.',
      'Level data defines each board’s obstacles, pens, available forces, and starting flock.',
      'The computer opponent uses minimax to evaluate candidate moves.',
    ],
    outcomes: [
      'Developed for CS 681 AI in Games in fall 2025.',
      'Released a downloadable demo on itch.io.',
    ],
  },

    {
        slug: 'tetris-block-by-block',
        title: 'Tetris: Block by Block',
        year: 2025,
        category: 'Falling-Block Puzzle · Class Demo',
        categories: ['Game Development'],
        summary: 'A Unity falling-block prototype with custom piece rotation, live scoring, and saved high scores.',
        overview: 'Developed for an ENGR 301 presentation, this project recreates classic falling-block gameplay while exploring the relationship between games, spatial reasoning, and pattern recognition.',
        stack: ['Unity', 'C#', 'WebGL', 'Grid-based Systems'],
        repository: 'https://github.com/Snow-Cai/Tetris-Presentation-Demo',
        demo: { href: 'https://mioolm.itch.io/tetris-class-demo', kind: 'browser' },
        screenshots: [
            { src: 'media/projects/tetris-block-by-block/game-board.webp', alt: 'Completed falling-block round with a stack of colored blocks and a game-over overlay' },
            { src: 'media/projects/tetris-block-by-block/start-screen.webp', alt: 'Falling-block game start screen with the scoreboard and keyboard prompt' },
        ],
        contributions: [
            'Built the Unity prototype and refined block spawning and score-based fall speed.',
            'Added high-score tracking, restart controls, and sound effects.',
            'Built and published the WebGL version for the class presentation.',
        ],
        implementation: [
            'Custom 3x3 grid-based block rotation system.',
            'Real-time scoring and persistent high score tracking.',
            'Keyboard-controlled movement, rotation, and soft dropping.',
            'Pause and game-over functionality.',
        ],
        outcomes: [
            'Developed as an interactive demonstration for ENGR 301 in Summer 2025.',
            'Published as a browser-playable prototype on itch.io.',
        ],
    },

    {
        slug: 'no-names-laundromat',
        title: 'Minos',
        year: 2024,
        category: '2D Action · Course Project',
        categories: ['Game Development'],
        summary: 'A collaborative Unity action game with platforming, player combat, and boss encounters.',
        overview: 'Minos combines 2D movement and combat across a tutorial and subsequent levels. The Unity project includes jumping, dashing, enemy behaviors, health, and scene transitions.',
        stack: ['Unity', 'C#', '2D Gameplay', 'Combat Systems'],
        repository: 'https://github.com/1106-Meng-Shawn/No-Name-s-Laundromat',
        contributions: [
            'Added the tutorial and second-level Unity scene files to the project repository.',
            'Integrated control bindings and the UI files for the HUD, level selection, pause menu, and title screen.',
        ],
        implementation: [
            'Movement code handles horizontal movement, jumping, and character orientation.',
            'Combat code handles attack input, cooldowns, and damage.',
            'Separate scripts implement enemy types, boss behavior, and win conditions.',
        ],
        outcomes: ['Developed for CS 328 Fundamentals of Game Design in fall 2024.'],
    },
]

export const projects = projectEntries.sort((a, b) => b.year - a.year)

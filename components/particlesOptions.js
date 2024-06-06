const particlesOptions =
  {
    background: {
        color: {
            value: "#071418",
        },
    },
    fpsLimit: 300,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.10,
            },
        },
    },
    particles: {
        color: {
            value: "#C0FFFF",
        },
        links: {
            color: "#32575D",
            distance: 135,
            enable: true,
            opacity: 0.9,
            width: 3,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 0.7,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 200,
        },
        opacity: {
            value: 0.7,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
};
export default particlesOptions;
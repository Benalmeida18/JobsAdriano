const mp = new MercadoPago('APP_USR-1106e10c-b1fa-49b3-ab3d-209febceb7ff');


mp.bricks().create("wallet", "wallet_container", {
    initialization: {
        preferenceId: "wallet_container",
    },
});


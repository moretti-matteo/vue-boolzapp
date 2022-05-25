const root = new Vue({
    el: '#root',
    data: {
        startUrlImg: "./img/avatar",
        endUrlImg: ".jpg",
        currentUser: 0,
        msg: "",
        search: "",
        emoji: false,
        lastMsgSelected: null,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        modalActive: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        modalActive: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        modalActive: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        modalActive: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        modalActive: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        modalActive: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        modalActive: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        modalActive: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        modalActive: false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        modalActive: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        modalActive: false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        modalActive: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        modalActive: false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        modalActive: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        modalActive: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        modalActive: false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        modalActive: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        modalActive: false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        modalActive: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        modalActive: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        modalActive: false
                    }
                ],
            }
        ]

    },
    methods: {
        checkData(dataMsg) {
            return dataMsg.split(" ")[1].slice(0, 5);
        },
        changeChat(i) {
            this.currentUser = i;
        },
        sendMsg() {
            const data = new Date().toLocaleString();
            console.log(data);
            this.contacts[this.currentUser].messages.push({ date: data, message: this.msg, status: "sent", modalActive: false });
            this.msg = "";
            this.receiveMsg(data);
        },
        receiveMsg(data) {
            setTimeout(() => {
                this.contacts[this.currentUser].messages.push(
                    {
                        date: data,
                        message: "Ok!",
                        status: "received",
                        modalActive: false
                    }
                )
            }, 1000);
        },
        filterContacts() {
            console.log(this.search);
            for (contact in this.contacts) {
                if (!this.contacts[contact].name.toLowerCase().startsWith(this.search.toLowerCase())) {
                    this.contacts[contact].visible = false;
                } else {
                    this.contacts[contact].visible = true;
                }
            }
        },
        deleteMsg(i) {
            console.log("delete");
            this.contacts[this.currentUser].messages.splice(i, 1);

        },
        showModal(i) {
            console.log("showModal()");
            if (this.lastMsgSelected !== null) {
                this.lastMsgSelected.modalActive = !this.lastMsgSelected.modalActive;
            }
            this.lastMsgSelected = this.contacts[this.currentUser].messages[i];
            this.contacts[this.currentUser].messages[i].modalActive = !this.contacts[this.currentUser].messages[i].modalActive;
        },
        showEmoji() {
            this.emoji = !this.emoji;
        }
    }
});
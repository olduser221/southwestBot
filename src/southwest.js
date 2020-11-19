const fetch = require('node-fetch');
const dayjs = require('dayjs');

module.exports = class Southwest {
    constructor(confirmation, firstName, lastName) {
        this.confirmation = confirmation;
        this.firstName = firstName;
        this.lastName = lastName;
        this.checkinTime = {hour: 6, minute: 20};
    }

    async checkin() {

        console.log(`[LOG][${this.confirmation}] Attempting to check in`)

        const checkin = setInterval(async () => {
            try {

                const body = {
                    "confirmationNumber": this.confirmation,
                    "passengerFirstName": this.firstName,
                    "passengerLastName": this.lastName,
                    "application": "air-check-in",
                    "site": "southwest"
                };
        
                const response = await fetch('https://www.southwest.com/api/air-checkin/v1/air-checkin/page/air/check-in/review', {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': 'l7xx944d175ea25f4b9c903a583ea82a1c4c'
                    }
                });
        
                const json = await response.json();
            
                if (json.success === true) {
                    console.log(`[LOG][${this.confirmation}] Successfully checked in!`);
                    clearInterval(checkin);
                } else {
                    console.log(`[LOG][${this.confirmation}] ${json.notifications.fieldErrors[0].code}`);
                }
    
            } catch (error) {}
        }, 1500);

    }

    async wait() {
        console.log(`[LOG][${this.confirmation}] Waiting til ${this.checkinTime.hour}:${this.checkinTime.minute}`);
        const waiter = setInterval(async () => {
            const hour = dayjs().hour();
            const minute = dayjs().minute();

            if (hour === this.checkinTime.hour && minute === this.checkinTime.minute - 1) {
                await this.checkin();
                clearInterval(waiter);
            }
        }, 1000);
    }

}
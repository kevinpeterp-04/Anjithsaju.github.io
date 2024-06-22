const button = document.getElementById("reset");
      button.addEventListener("click", reset);
      async function updateMemberData(newdata, urlu) {
        const url = urlu;
        const payload = {
          filter: {
            _id: { $oid: "6673200056ee987ef2a3fc82" },
          },
          update: {
            $set: {
              DataOF: newdata,
            },
          },
        };

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          alert("data reseted");
        } catch (error) {
          console.error("Error:", error);
        }
      }
      function reset() {
        const pass = document.getElementById("password").value;
        if (pass == "yessekke") {
          let Chriswin = {
            pid: 101,
            Anjith: 0,
            Adith: 0,
            Kevin: 0,
            Richol: 0,
            Anadhakrishnan: 0
          };

          let Kevin = {
            pid: 102,
            Anjith: 0,
            Adith: 0,
            Chriswin: 0,
            Richol: 0,
            Anadhakrishnan: 0,
          };
          let Anjith = {
            pid: 103,
            Kevin: 0,
            Adith: 0,
            Chriswin: 0,
            Richol: 0,
            Anadhakrishnan: 0,
          };
          let Adith = {
            pid: 104,
            Anjith: 0,
            Kevin: 0,
            Chriswin: 0,
            Richol: 0,
            Anadhakrishnan: 0,
          };
          let Richol = {
            pid: 105,
            Anjith: 0,
            Adith: 0,
            Chriswin: 0,
            Kevin: 0,
            Anadhakrishnan: 0,
          };
          let Anadhakrishnan = {
            pid: 106,
            Anjith: 0,
            Adith: 0,
            Chriswin: 0,
            Richol: 0,
            Kevin: 0,
          };
          const  expensedetails=
          {
              Total:0,
              Breakfast:0,
              Lunch:0,
              Dinner:0,
              Snacks:0,
              Transport:0,
              Other:0
          }
          const individualdetails=
          {
              Chriswin:0,
              Anjith: 0,
              Adith: 0,
              Kevin: 0,
              Richol: 0,
              Anadhakrishnan: 0
          }
          const data1 = {
            Chriswin,
            Kevin,
            Anjith,
            Anadhakrishnan,
            Adith,
            Richol,
          };
          const database1={Tally:data1,
            Expenses:expensedetails,
            IDetails:individualdetails

          };
          //datapush(database1,"https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/memeberdatapush");
          updateMemberData(
            database1,
            "https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/membersdataupdate"
          );
          const deleteAllMembers = async () => {
            const url =
              "https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/transactiondelete";

            try {
              const response = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({}), // Empty body
              });

              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
            } catch (error) {
              console.error("Error:", error);
            }
          };

          // Call the function to delete all members
          deleteAllMembers();
         // location.replace("https://anjithsaju.github.io/");
        } else alert("wrong password");
      }

    
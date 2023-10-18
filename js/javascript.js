
        setInterval(() => {
            let hourses = document.querySelector(".hours");
            let minute = document.querySelector(".minute");
            let second = document.querySelector(".second");
            let datetable=document.querySelector(".datetime")
            let GetDate = new Date()
            let weeks=["Sun","Mon", "Tue","Wed","Thu","Fri","Sat"]
            let Month=["Jan","Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            let days = GetDate.getDay()
            let date = GetDate.getDate()
            let Monthes = GetDate.getMonth()
            let Months=Month[Monthes]
            let myday=weeks[days]
             datetable.innerHTML=myday+ ", "+date + " "+ Months
            let hour = GetDate.getHours();
            let minutess = GetDate.getMinutes();
            let secondes = GetDate.getSeconds();

            h = hour * 30 + minutess / 2;
            m = minutess * 6;
            s = secondes * 6;
            hourses.style.transform = `rotate(${h}deg)`;
            minute.style.transform = `rotate(${m}deg)`;
            second.style.transform = `rotate(${s}deg)`;

        }, 1000)
document.addEventListener("DOMContentLoaded", () => {
    const inputDate = document.querySelector("#date"); 
    const outputDate = document.querySelector("#output"); 
    const button = document.querySelector("button"); 

    button.addEventListener("click", () => {
        const { parseISO, isValid, format, subBusinessDays, getDay } = window.dateFns; 
        
        const examDate = parseISO(inputDate.value);

        if (!isValid(examDate)) {
            outputDate.textContent = "Invalid date!";
            outputDate.style.color = "#E75D2A";
            return;
        }

        let daysToSubtract = 4;
        const dayOfWeek = getDay(examDate); 

        
        if (dayOfWeek >= 1 && dayOfWeek <= 3) { 
            daysToSubtract = 4;
        }

        const dueDate = subBusinessDays(examDate, daysToSubtract);
        outputDate.textContent = `${format(dueDate, "MMMM d, yyyy")} at 11:59 PM`;
        outputDate.style.color = "#003C71"; 
    });
});

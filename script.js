// script.js
document.addEventListener("DOMContentLoaded", () => {
    const scanForm = document.getElementById("scanForm");
    const resultSection = document.getElementById("results");
    const resultList = document.getElementById("resultList");

    scanForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const cloudProvider = document.getElementById("cloudProvider").value;
        const configFile = document.getElementById("configFile").files[0];
        
        if (!configFile) {
            alert("Please upload a configuration file.");
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(event) {
            const configData = event.target.result;
            performScan(cloudProvider, configData);
        };
        reader.readAsText(configFile);
    });

    function performScan(provider, configData) {
        // Simulated scan results (replace with actual API call if needed)
        const mockResults = [
            `Checking security settings for ${provider}...`,
            "No public access detected.",
            "IAM roles are properly configured.",
            "No open security groups found."
        ];

        resultList.innerHTML = "";
        mockResults.forEach(result => {
            const li = document.createElement("li");
            li.textContent = result;
            resultList.appendChild(li);
        });
        
        resultSection.classList.remove("hidden");
    }
});

document.getElementById("generate").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const theme = document.getElementById("theme").value;
    const titleColor = document.getElementById("title_color").value.replace("#", "");
    const iconColor = document.getElementById("icon_color").value.replace("#", "");
    const bgColor = document.getElementById("bg_color").value.replace("#", "");
    const showIcons = document.getElementById("show_icons").checked;

    // Build the GitHub stats URL
    const statsURL = `https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&title_color=${titleColor}&icon_color=${iconColor}&bg_color=${bgColor}&show_icons=${showIcons}`;

    // Update the image preview
    document.getElementById("statsCard").src = statsURL;

    // Generate the markdown code
    const markdown = `![GitHub Stats](${statsURL})`;
    document.getElementById("markdownCode").value = markdown;
});

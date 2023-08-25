const container = document.querySelector('.container');
const filters = [];

fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        const allJobs = data;
        let filteredJobs = filters.length > 0 ? filterJobsByFilters(allJobs, filters) : allJobs;

        filteredJobs.forEach((job) => {
            const jobContainer = document.createElement('div');
            jobContainer.className = `flex justify-between items-center w-4/5 my-3 px-3 ${job.featured ? 'border-l-4 border-primary' : ''}`;

            const jobDetails = document.createElement('div');
            jobDetails.className = 'flex items-center gap-5 p-2';

            const logoDiv = document.createElement('div');
            const logoImage = document.createElement('img');
            logoImage.src = job.logo;
            logoDiv.appendChild(logoImage);
            jobDetails.appendChild(logoDiv);

            const textDetails = document.createElement('div');
            const companyInfo = document.createElement('div');
            companyInfo.className = 'flex gap-2';
            const companyName = document.createElement('p');
            companyName.textContent = job.company;
            const isNew = document.createElement('p');
            isNew.textContent = job.new ? 'New!' : '';
            const isFeatured = document.createElement('p');
            isFeatured.textContent = job.featured ? 'Featured' : '';
            companyInfo.appendChild(companyName);
            companyInfo.appendChild(isNew);
            companyInfo.appendChild(isFeatured);
            textDetails.appendChild(companyInfo);

            const position = document.createElement('h2');
            position.textContent = job.position;
            textDetails.appendChild(position);

            const contractDetails = document.createElement('div');
            contractDetails.className = 'flex gap-2';
            const postedAt = document.createElement('p');
            postedAt.textContent = job.postedAt;
            const contractType = document.createElement('p');
            contractType.textContent = job.contract;
            const location = document.createElement('p');
            location.textContent = job.location;
            contractDetails.appendChild(postedAt);
            contractDetails.appendChild(contractType);
            contractDetails.appendChild(location);
            textDetails.appendChild(contractDetails);

            jobDetails.appendChild(textDetails);

            const roleLanguagesTools = document.createElement('div');
            roleLanguagesTools.className = 'flex gap-2';
            const role = document.createElement('p');
            role.textContent = job.role;
            const level = document.createElement('p');
            level.textContent = job.level;
            roleLanguagesTools.appendChild(role);
            roleLanguagesTools.appendChild(level);

            job.languages.forEach(language => {
              const languageElement = document.createElement('p');
              languageElement.textContent = language;
              languageElement.addEventListener('click', () => addToFiltersAndRender(language));
              roleLanguagesTools.appendChild(languageElement);
          });

          job.tools.forEach(tool => {
              const toolElement = document.createElement('p');
              toolElement.textContent = tool;
              toolElement.addEventListener('click', () => addToFiltersAndRender(tool));
              roleLanguagesTools.appendChild(toolElement);
          });

            jobContainer.appendChild(jobDetails);
            jobContainer.appendChild(roleLanguagesTools);

            container.appendChild(jobContainer);
        });
    })
    .catch(error => {
        console.error('Data loading error:', error);
        container.innerHTML = 'Error couldnt load data';
    });

console.log(filters);
function filterJobsByFilters(jobs, filters) {
  return jobs.filter(job => {
      return (
          filters.every(filter => job.role.includes(filter) || job.level.includes(filter) || job.languages.includes(filter) || job.tools.includes(filter))
      );
  });
}

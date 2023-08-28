const container = document.querySelector('.container');
const filters = [];

let allJobs = [];

const filtersSection = document.createElement('div');
filtersSection.className = 'filters-section flex flex-wrap sm:flex-nowrap bg-white justify-start gap-2 py-3 px-4';
// document.body.insertBefore(filtersSection, container);

fetch('https://my.api.mockaroo.com/user.json?key=3ae8be40')
    .then(response => response.json())
    .then(data => {
        allJobs = data;
        renderJobs(allJobs);
    })
    .catch(error => {
        console.error('Data loading error:', error);
        container.innerHTML = 'Error couldnt load data';
    });

function renderFilters() {
  filtersSection.innerHTML = '';
  filters.forEach(filter => {
    const filterElement = document.createElement('div');
    filterElement.className = 'filter text-primary bg-lighbg px-2 rounded-lg flex flex-between';
    filterElement.textContent = filter;

    const deleteButton = document.createElement('span');
    deleteButton.className = 'delete-button hover:cursor-pointer hover:bg-verydark px-2 bg-primary text-white rounded-md ml-3';
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => removeFilter(filter));

    filterElement.appendChild(deleteButton);
    filtersSection.appendChild(filterElement);
  });

  if (filters.length > 0) {
      const clearFiltersButton = document.createElement('button');
      clearFiltersButton.className = 'clear-filters-button self-end text-primary font-bold hover:underline';
      clearFiltersButton.textContent = 'Clear';
      clearFiltersButton.addEventListener('click', clearAllFilters);
      filtersSection.appendChild(clearFiltersButton);
  }
}

function renderJobs(jobs) {
    container.innerHTML = '';

    const filteredJobs = filters.length > 0 ? filterJobsByFilters(jobs, filters) : jobs;
    renderFilters();

    container.appendChild(filtersSection);
    filteredJobs.forEach((job) => {
        const jobContainer = document.createElement('div');
        jobContainer.className = `flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between items-center drop-shadow-md bg-white w-4/5 my-3 px-3 ${job.featured ? 'border-l-4 border-primary' : ''}`;

        const jobDetails = document.createElement('div');
        jobDetails.className = 'flex flex-col sm:flex-row items-center gap-5 p-2';

        const logoDiv = document.createElement('div');
        const logoImage = document.createElement('img');
        logoImage.src = job.logo;
        logoDiv.appendChild(logoImage);
        jobDetails.appendChild(logoDiv);

        const textDetails = document.createElement('div');
        const companyInfo = document.createElement('div');
        companyInfo.className = 'flex gap-2';
        const companyName = document.createElement('p');
        companyName.className = 'text-primary font-bold';
        companyName.textContent = job.company;
        const isNew = document.createElement('p');
        isNew.textContent = job.new ? 'New!' : '';
        isNew.className = job.new ? 'text-white bg-primary px-2 rounded-xl' : '';
        const isFeatured = document.createElement('p');
        isFeatured.textContent = job.featured ? 'Featured' : '';
        isFeatured.className = job.featured ? 'text-white bg-verydark px-3 rounded-xl' : '';
        companyInfo.appendChild(companyName);
        companyInfo.appendChild(isNew);
        companyInfo.appendChild(isFeatured);
        textDetails.appendChild(companyInfo);

        const position = document.createElement('h2');
        position.textContent = job.position;
        position.className = 'font-bold cursor-pointer hover:text-primary'
        textDetails.appendChild(position);

        const contractDetails = document.createElement('div');
        contractDetails.className = 'flex gap-2';
        const postedAt = document.createElement('p');
        postedAt.textContent = job.postedAt;
        postedAt.className = 'text-darkgray';
        const contractType = document.createElement('p');
        contractType.textContent = job.contract;
        contractType.className = 'text-darkgray';
        const location = document.createElement('p');
        location.textContent = job.location;
        location.className = 'text-darkgray';
        contractDetails.appendChild(postedAt);
        contractDetails.appendChild(contractType);
        contractDetails.appendChild(location);
        textDetails.appendChild(contractDetails);

        jobDetails.appendChild(textDetails);


        const roleLanguagesTools = document.createElement('div');
        roleLanguagesTools.className = 'flex flex-wrap sm:flex-nowrap gap-2 md:flex-nowrap';
        const roleElement = document.createElement('p');
        roleElement.textContent = job.role;
        roleElement.className = 'bg-lightfiler px-3 text-primary font-medium cursor-pointer hover:bg-primary hover:text-white rounded-lg';
        roleElement.addEventListener('click', () => toggleFilter(job.role));
        roleLanguagesTools.appendChild(roleElement);

        const levelElement = document.createElement('p');
        levelElement.textContent = job.level;
        levelElement.className = 'bg-lightfiler px-3 text-primary font-medium cursor-pointer hover:bg-primary hover:text-white rounded-lg';
        levelElement.addEventListener('click', () => toggleFilter(job.level));
        roleLanguagesTools.appendChild(levelElement);

        job.languages.forEach(language => {
          const languageElement = document.createElement('p');
          languageElement.textContent = language;
          languageElement.className = 'bg-lightfiler px-3 text-primary font-medium cursor-pointer hover:bg-primary hover:text-white rounded-lg';
          languageElement.addEventListener('click', () => toggleFilter(language));
          roleLanguagesTools.appendChild(languageElement);
        });

        job.tools.forEach(tool => {
          const toolElement = document.createElement('p');
          toolElement.textContent = tool;
          toolElement.className = 'bg-lightfiler px-3 text-primary font-medium cursor-pointer hover:bg-primary hover:text-white rounded-lg';
          toolElement.addEventListener('click', () => toggleFilter(tool));
          roleLanguagesTools.appendChild(toolElement);
        });

        jobContainer.appendChild(jobDetails);
        jobContainer.appendChild(roleLanguagesTools);

        container.appendChild(jobContainer);
    });
}

function toggleFilter(filterValue) {
  if (filters.includes(filterValue)) {
    return;
  } else {
      filters.push(filterValue);
  }
  renderJobs(allJobs);
}

function removeFilter(filterValue) {
  filters.splice(filters.indexOf(filterValue), 1);
  renderJobs(allJobs);
}

function clearAllFilters() {
  filters.length = 0;
  renderJobs(allJobs);
}

function filterJobsByFilters(jobs, filters) {
    return jobs.filter(job => {
        return (
            filters.every(filter => job.role.includes(filter) || job.level.includes(filter) || job.languages.includes(filter) || job.tools.includes(filter))
        );
    });
}

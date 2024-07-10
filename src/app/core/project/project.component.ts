import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  gallery =
  [{
    heading: 'Rejuvenation of lake, Karnataka',
    content:'We hands with Mysore administration to rejuvenate the lake and restore its past glory',
    url: 'assets/images/portfolio-1.jpg',
    project: 'Complete Projects'
  },
  {
    heading: 'Construction of Sewage Treatment Plant, Haryana',
    content:'Solid waste management & Construction of Sewage Treatment Plant',
    url: 'assets/images/portfolio-2.jpg',
    project: 'Ongoing Projects'
  },
  {
    heading: 'Waste Management Program, Rajasthan',
    content:'Door to door waste collection, cleaning of roads/ lanes, segregation of waste, composting from wet waste and awareness generation.',
    url: 'assets/images/portfolio-3.jpg',
    project: 'Complete Projects'
  },
  {
    heading: 'Zero Waste Initiative, Maharastra',
    content:'With the support of the local municipal corporation, replicated a successful model of Zero Waste ward at different wards',
    url: 'assets/images/portfolio-4.jpg',
    project: 'Ongoing Projects'
  },
  {
    heading: 'Integrated Solid waste Management Project, JMC',
    content:'Integrated Solid waste Management Project, by NAFED (National Agricultural Co operative Marketing Federation of India)',
    url: 'assets/images/portfolio-5.jpg',
    project: 'Complete Projects'
  },
  {
    heading: 'Compost & RDF Plant, Sheety Atmakur',
    content:'Composting for organic waste with dry waste RDF bailing along with recyclables recovery process.',
    url: 'assets/images/portfolio-6.jpg',
    project: 'Ongoing Projects'
  }
  ]
filterBy: string = "";
public projects: any = [];
  constructor() { }

  ngOnInit(): void {
    this.projects = this.gallery;
  }
  openProjects(projectValue: any) {
    if (projectValue != 'All') {
      console.log("value", projectValue);
      this.filterBy = projectValue;
      this.projects = this.gallery.filter((obj: any) => obj.project == projectValue);
      console.log("Projects", this.projects);
    }
    else if (projectValue === 'All') {
      this.projects = this.gallery;
    }
  }
}


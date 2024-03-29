import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  searchTerm: string = '';
  filteredData: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get('https://praktikum-cpanel-unbin.com/api_pmb/get_data.php').subscribe((data: any) => {
      if (data.success) {
        this.filteredData = data.result;
      } else {
        console.error('Failed to fetch data');
      }
    });
  }

  filterData() {
    if (this.searchTerm === '') {
      // If the search term is empty, display all data
      this.filteredData = this.filteredData;
    } else {
      // If there is a search term, filter the data
      this.filteredData = this.filteredData.filter((data) =>
        Object.values(data).some((value) => String(value).toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
  }
}
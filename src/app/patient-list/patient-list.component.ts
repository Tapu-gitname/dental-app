import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {

  patients: any = []

  constructor(private apiService: ApiService) {}

  // patients: any[] = [
  //   { name: 'John Doe', phone: '123-456-7890', treatment: 'Cleaning' },
  //   { name: 'Jane Smith', phone: '987-654-3210', treatment: 'Filling' },
  //   { name: 'Sam Wilson', phone: '555-123-4567', treatment: 'Root Canal' },
  //   { name: 'Sam Wilson', phone: '555-123-4567', treatment: 'Root Canal' },
  //   { name: 'Sam Wilson', phone: '555-123-4567', treatment: 'Root Canal' },
  //   { name: 'Sam Wilson', phone: '555-123-4567', treatment: 'Root Canal' }
  // ];
  
  ngOnInit(): void {
    this.apiService.getPatients().subscribe((data) => {
      this.patients = data;
    },
    (error) => {
      console.error('Error fetching series', error);
    });
  }


}

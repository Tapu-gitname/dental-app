import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {

  patients: any[] = [
    { name: 'John Doe', phone: '123-456-7890', treatment: 'Cleaning' },
    { name: 'Jane Smith', phone: '987-654-3210', treatment: 'Filling' },
    { name: 'Sam Wilson', phone: '555-123-4567', treatment: 'Root Canal' },
    { name: 'Sam Wilson', phone: '555-123-4567', treatment: 'Root Canal' },
    { name: 'Sam Wilson', phone: '555-123-4567', treatment: 'Root Canal' },
    { name: 'Sam Wilson', phone: '555-123-4567', treatment: 'Root Canal' }
  ];

}

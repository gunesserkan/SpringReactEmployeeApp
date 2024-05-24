package com.gunes.ems.service.abstracts;

import com.gunes.ems.dto.concretes.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
}

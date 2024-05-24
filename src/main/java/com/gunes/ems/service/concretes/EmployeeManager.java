package com.gunes.ems.service.concretes;

import com.gunes.ems.dto.concretes.EmployeeDto;
import com.gunes.ems.entity.Employee;
import com.gunes.ems.mapper.concretes.EmployeeMapper;
import com.gunes.ems.repository.abstracts.EmployeeRepository;
import com.gunes.ems.service.abstracts.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeManager implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}

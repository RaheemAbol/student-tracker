package com.abol.studentsystem.service;

import com.abol.studentsystem.model.Student;
import com.abol.studentsystem.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepo studentRepo;
    @Override
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }
}

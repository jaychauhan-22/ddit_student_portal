using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DDITStudentPortal.Data;
using DDITStudentPortal.Models;
using Microsoft.CodeAnalysis;
using Newtonsoft.Json.Linq;

namespace DDITStudentPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly DDITStudentPortalContext _context;

        public StudentsController(DDITStudentPortalContext context)
        {
            _context = context;
        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudent()
        {
            return await _context.Student.ToListAsync();
        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(string id)
        {
            var student = await _context.Student.FirstOrDefaultAsync(x=>x.StudentCode == id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }
        [Route("/Login")]
        [HttpPost]
        public async Task<ActionResult<Student>> LoginUser(Student student)
        {
            var existingStudent = await _context.Student.FirstOrDefaultAsync(x => x.StudentCode == student.StudentCode);
            if (existingStudent != null && existingStudent.BirthDate == student.BirthDate)
            {
                return existingStudent;
            }
            return BadRequest();
        }
        // GET: api/Students/5
        /*[HttpGet("{studentcode}/{birthdate}")]
        public async Task<ActionResult<Student>> AuthenticateStudent(string studentcode,string birthdate)
        {
            
            var existingStudent = await _context.Student.FirstOrDefaultAsync(x => x.StudentCode == studentcode);
            Console.WriteLine(studentcode);
            birthdate = birthdate.Replace("%2F", "/");
            System.Diagnostics.Debug.WriteLine(birthdate);
            if (existingStudent != null && existingStudent.BirthDate == birthdate)
            {
                return existingStudent;
            }
            
            return NotFound();
        }*/
        // PUT: api/Students/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent(int id, Student student)
        {
            if (id != student.StudentId)
            {
                return BadRequest();
            }

            _context.Entry(student).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Students
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
            _context.Student.Add(student);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudent", new { id = student.StudentId }, student);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var student = await _context.Student.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Student.Remove(student);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudentExists(int id)
        {
            return _context.Student.Any(e => e.StudentId == id);
        }
    }
}

using EmployeeDetailsWebAPI.Data;
using EmployeeDetailsWebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeDetailsWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
   //ublic int testId;
    public class EmployeeController : Controller
    {
        private readonly EmployeeDB _empDB;
        public EmployeeController(EmployeeDB employeeDB)
        {
            _empDB = employeeDB;
        }

        public EmployeeDB EmployeeDB { get; }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployee()
        {
          var emp=  await  _empDB.Employees.ToListAsync();
            return Ok(emp);
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee empPostRequest)
        {
            int testId = 0 + 100;

            empPostRequest.EmpId = 343343343;
            await _empDB.Employees.AddAsync(empPostRequest);
            await _empDB.SaveChangesAsync();
            return Ok(empPostRequest);

        }
    }
}

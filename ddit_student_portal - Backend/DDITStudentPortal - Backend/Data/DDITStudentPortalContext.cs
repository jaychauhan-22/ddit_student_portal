using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DDITStudentPortal.Models;

namespace DDITStudentPortal.Data
{
    public class DDITStudentPortalContext : DbContext
    {
        public DDITStudentPortalContext (DbContextOptions<DDITStudentPortalContext> options)
            : base(options)
        {
        }

        public DbSet<DDITStudentPortal.Models.Student> Student { get; set; } = default!;

        public DbSet<DDITStudentPortal.Models.Result> Result { get; set; }

        public DbSet<DDITStudentPortal.Models.Fees> Fees { get; set; }

        public DbSet<DDITStudentPortal.Models.Subject> Subject { get; set; }

        public DbSet<DDITStudentPortal.Models.Session>? Session { get; set; }
    }
}

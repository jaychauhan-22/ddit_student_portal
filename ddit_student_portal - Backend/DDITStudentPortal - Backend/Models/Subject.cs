using System.ComponentModel.DataAnnotations;

namespace DDITStudentPortal.Models
{
    public class Subject
    {
        public int SubjectId { get; set; }
        public string? SubjectCode { get; set; }
        public string? Name { get; set; }
        public string? Alias { get; set; }
        public string? Program { get; set; }
        public string? RecStatus { get; set; }
        public int Session { get; set; }
        public bool Elective { get; set; }
        public int Credit { get; set; }
        public int ThMinPass1 { get; set; }
        public int ThMinPass2 { get; set; }
        public int ThTotal { get; set; }
        public int SessMinPass1 { get; set; }
        public int SessMinPass2 { get; set; }
        public int SessTotal { get; set; }
        public int PrMinPass1 { get; set; }
        public int PrMinPass2 { get; set; }
        public int PrTotal { get; set; }
        public int TwMinPass1 { get; set; }
        public int TwMinPass2 { get; set; }
        public int TwTotal { get; set; }
        public int TotalMinPass { get; set; }
        public int TotalMarks { get; set; }
        public int Syllabus { get; set; }


    }
}

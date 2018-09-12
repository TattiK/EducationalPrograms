﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.EducationalProgram
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Semestr.
    /// </summary>
    // *** Start programmer edit section *** (Semestr CustomAttributes)

    // *** End programmer edit section *** (Semestr CustomAttributes)
    [AutoAltered()]
    [Caption("Семестр")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("SemestrE", new string[] {
            "Name as \'Название семестра\'",
            "Description as \'Описание\'",
            "DateBegin as \'Дата начала\'",
            "DateEnd as \'Дата конца\'"})]
    [AssociatedDetailViewAttribute("SemestrE", "Eps", "EduProgramD", true, "", "Образовательные программы", true, new string[] {
            ""})]
    [View("SemestrL", new string[] {
            "Name as \'Название семестра\'"})]
    public class Semestr : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fDescription;
        
        private System.DateTime fDateBegin;
        
        private System.DateTime fDateEnd;
        
        private IIS.EducationalProgram.DetailArrayOfEduProgram fEps;
        
        // *** Start programmer edit section *** (Semestr CustomMembers)

        // *** End programmer edit section *** (Semestr CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Semestr.Name CustomAttributes)

        // *** End programmer edit section *** (Semestr.Name CustomAttributes)
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Semestr.Name Get start)

                // *** End programmer edit section *** (Semestr.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Semestr.Name Get end)

                // *** End programmer edit section *** (Semestr.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Semestr.Name Set start)

                // *** End programmer edit section *** (Semestr.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Semestr.Name Set end)

                // *** End programmer edit section *** (Semestr.Name Set end)
            }
        }
        
        /// <summary>
        /// Description.
        /// </summary>
        // *** Start programmer edit section *** (Semestr.Description CustomAttributes)

        // *** End programmer edit section *** (Semestr.Description CustomAttributes)
        public virtual string Description
        {
            get
            {
                // *** Start programmer edit section *** (Semestr.Description Get start)

                // *** End programmer edit section *** (Semestr.Description Get start)
                string result = this.fDescription;
                // *** Start programmer edit section *** (Semestr.Description Get end)

                // *** End programmer edit section *** (Semestr.Description Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Semestr.Description Set start)

                // *** End programmer edit section *** (Semestr.Description Set start)
                this.fDescription = value;
                // *** Start programmer edit section *** (Semestr.Description Set end)

                // *** End programmer edit section *** (Semestr.Description Set end)
            }
        }
        
        /// <summary>
        /// DateBegin.
        /// </summary>
        // *** Start programmer edit section *** (Semestr.DateBegin CustomAttributes)

        // *** End programmer edit section *** (Semestr.DateBegin CustomAttributes)
        public virtual System.DateTime DateBegin
        {
            get
            {
                // *** Start programmer edit section *** (Semestr.DateBegin Get start)

                // *** End programmer edit section *** (Semestr.DateBegin Get start)
                System.DateTime result = this.fDateBegin;
                // *** Start programmer edit section *** (Semestr.DateBegin Get end)

                // *** End programmer edit section *** (Semestr.DateBegin Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Semestr.DateBegin Set start)

                // *** End programmer edit section *** (Semestr.DateBegin Set start)
                this.fDateBegin = value;
                // *** Start programmer edit section *** (Semestr.DateBegin Set end)

                // *** End programmer edit section *** (Semestr.DateBegin Set end)
            }
        }
        
        /// <summary>
        /// DateEnd.
        /// </summary>
        // *** Start programmer edit section *** (Semestr.DateEnd CustomAttributes)

        // *** End programmer edit section *** (Semestr.DateEnd CustomAttributes)
        public virtual System.DateTime DateEnd
        {
            get
            {
                // *** Start programmer edit section *** (Semestr.DateEnd Get start)

                // *** End programmer edit section *** (Semestr.DateEnd Get start)
                System.DateTime result = this.fDateEnd;
                // *** Start programmer edit section *** (Semestr.DateEnd Get end)

                // *** End programmer edit section *** (Semestr.DateEnd Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Semestr.DateEnd Set start)

                // *** End programmer edit section *** (Semestr.DateEnd Set start)
                this.fDateEnd = value;
                // *** Start programmer edit section *** (Semestr.DateEnd Set end)

                // *** End programmer edit section *** (Semestr.DateEnd Set end)
            }
        }
        
        /// <summary>
        /// Semestr.
        /// </summary>
        // *** Start programmer edit section *** (Semestr.Eps CustomAttributes)

        // *** End programmer edit section *** (Semestr.Eps CustomAttributes)
        public virtual IIS.EducationalProgram.DetailArrayOfEduProgram Eps
        {
            get
            {
                // *** Start programmer edit section *** (Semestr.Eps Get start)

                // *** End programmer edit section *** (Semestr.Eps Get start)
                if ((this.fEps == null))
                {
                    this.fEps = new IIS.EducationalProgram.DetailArrayOfEduProgram(this);
                }
                IIS.EducationalProgram.DetailArrayOfEduProgram result = this.fEps;
                // *** Start programmer edit section *** (Semestr.Eps Get end)

                // *** End programmer edit section *** (Semestr.Eps Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Semestr.Eps Set start)

                // *** End programmer edit section *** (Semestr.Eps Set start)
                this.fEps = value;
                // *** Start programmer edit section *** (Semestr.Eps Set end)

                // *** End programmer edit section *** (Semestr.Eps Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "SemestrE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SemestrE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SemestrE", typeof(IIS.EducationalProgram.Semestr));
                }
            }
            
            /// <summary>
            /// "SemestrL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SemestrL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SemestrL", typeof(IIS.EducationalProgram.Semestr));
                }
            }
        }
    }
}

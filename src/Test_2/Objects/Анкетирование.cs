﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Анкетирование.
    /// </summary>
    // *** Start programmer edit section *** (Анкетирование CustomAttributes)

    // *** End programmer edit section *** (Анкетирование CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("АнкетированиеE", new string[] {
            "Дата as \'Дата\'"})]
    [AssociatedDetailViewAttribute("АнкетированиеE", "Список", "СписокE", true, "", "Список", true, new string[] {
            ""})]
    [View("АнкетированиеL", new string[] {
            "Дата as \'Дата\'"})]
    public class Анкетирование : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private IIS.Test_2.Опрос fОпрос;
        
        private IIS.Test_2.DetailArrayOfСписок fСписок;
        
        // *** Start programmer edit section *** (Анкетирование CustomMembers)

        // *** End programmer edit section *** (Анкетирование CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Анкетирование.Дата CustomAttributes)

        // *** End programmer edit section *** (Анкетирование.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Анкетирование.Дата Get start)

                // *** End programmer edit section *** (Анкетирование.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Анкетирование.Дата Get end)

                // *** End programmer edit section *** (Анкетирование.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкетирование.Дата Set start)

                // *** End programmer edit section *** (Анкетирование.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Анкетирование.Дата Set end)

                // *** End programmer edit section *** (Анкетирование.Дата Set end)
            }
        }
        
        /// <summary>
        /// Анкетирование.
        /// </summary>
        // *** Start programmer edit section *** (Анкетирование.Опрос CustomAttributes)

        // *** End programmer edit section *** (Анкетирование.Опрос CustomAttributes)
        [PropertyStorage(new string[] {
                "Опрос"})]
        [NotNull()]
        public virtual IIS.Test_2.Опрос Опрос
        {
            get
            {
                // *** Start programmer edit section *** (Анкетирование.Опрос Get start)

                // *** End programmer edit section *** (Анкетирование.Опрос Get start)
                IIS.Test_2.Опрос result = this.fОпрос;
                // *** Start programmer edit section *** (Анкетирование.Опрос Get end)

                // *** End programmer edit section *** (Анкетирование.Опрос Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкетирование.Опрос Set start)

                // *** End programmer edit section *** (Анкетирование.Опрос Set start)
                this.fОпрос = value;
                // *** Start programmer edit section *** (Анкетирование.Опрос Set end)

                // *** End programmer edit section *** (Анкетирование.Опрос Set end)
            }
        }
        
        /// <summary>
        /// Анкетирование.
        /// </summary>
        // *** Start programmer edit section *** (Анкетирование.Список CustomAttributes)

        // *** End programmer edit section *** (Анкетирование.Список CustomAttributes)
        public virtual IIS.Test_2.DetailArrayOfСписок Список
        {
            get
            {
                // *** Start programmer edit section *** (Анкетирование.Список Get start)

                // *** End programmer edit section *** (Анкетирование.Список Get start)
                if ((this.fСписок == null))
                {
                    this.fСписок = new IIS.Test_2.DetailArrayOfСписок(this);
                }
                IIS.Test_2.DetailArrayOfСписок result = this.fСписок;
                // *** Start programmer edit section *** (Анкетирование.Список Get end)

                // *** End programmer edit section *** (Анкетирование.Список Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкетирование.Список Set start)

                // *** End programmer edit section *** (Анкетирование.Список Set start)
                this.fСписок = value;
                // *** Start programmer edit section *** (Анкетирование.Список Set end)

                // *** End programmer edit section *** (Анкетирование.Список Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "АнкетированиеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АнкетированиеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АнкетированиеE", typeof(IIS.Test_2.Анкетирование));
                }
            }
            
            /// <summary>
            /// "АнкетированиеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АнкетированиеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АнкетированиеL", typeof(IIS.Test_2.Анкетирование));
                }
            }
        }
    }
}

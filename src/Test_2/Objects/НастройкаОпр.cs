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
    /// Настройка опр.
    /// </summary>
    // *** Start programmer edit section *** (НастройкаОпр CustomAttributes)

    // *** End programmer edit section *** (НастройкаОпр CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НастройкаОпрE", new string[0])]
    [AssociatedDetailViewAttribute("НастройкаОпрE", "Содержание", "СодержаниеE", true, "", "Содержание", true, new string[] {
            ""})]
    [View("НастройкаОпрL", new string[0])]
    public class НастройкаОпр : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Test_2.Сотрудники fСотрудники;
        
        private IIS.Test_2.Опрос fОпрос;
        
        private IIS.Test_2.DetailArrayOfСодержание fСодержание;
        
        // *** Start programmer edit section *** (НастройкаОпр CustomMembers)

        // *** End programmer edit section *** (НастройкаОпр CustomMembers)

        
        /// <summary>
        /// Настройка опр.
        /// </summary>
        // *** Start programmer edit section *** (НастройкаОпр.Опрос CustomAttributes)

        // *** End programmer edit section *** (НастройкаОпр.Опрос CustomAttributes)
        [PropertyStorage(new string[] {
                "Опрос"})]
        [NotNull()]
        public virtual IIS.Test_2.Опрос Опрос
        {
            get
            {
                // *** Start programmer edit section *** (НастройкаОпр.Опрос Get start)

                // *** End programmer edit section *** (НастройкаОпр.Опрос Get start)
                IIS.Test_2.Опрос result = this.fОпрос;
                // *** Start programmer edit section *** (НастройкаОпр.Опрос Get end)

                // *** End programmer edit section *** (НастройкаОпр.Опрос Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройкаОпр.Опрос Set start)

                // *** End programmer edit section *** (НастройкаОпр.Опрос Set start)
                this.fОпрос = value;
                // *** Start programmer edit section *** (НастройкаОпр.Опрос Set end)

                // *** End programmer edit section *** (НастройкаОпр.Опрос Set end)
            }
        }
        
        /// <summary>
        /// Настройка опр.
        /// </summary>
        // *** Start programmer edit section *** (НастройкаОпр.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (НастройкаОпр.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Test_2.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (НастройкаОпр.Сотрудники Get start)

                // *** End programmer edit section *** (НастройкаОпр.Сотрудники Get start)
                IIS.Test_2.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (НастройкаОпр.Сотрудники Get end)

                // *** End programmer edit section *** (НастройкаОпр.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройкаОпр.Сотрудники Set start)

                // *** End programmer edit section *** (НастройкаОпр.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (НастройкаОпр.Сотрудники Set end)

                // *** End programmer edit section *** (НастройкаОпр.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Настройка опр.
        /// </summary>
        // *** Start programmer edit section *** (НастройкаОпр.Содержание CustomAttributes)

        // *** End programmer edit section *** (НастройкаОпр.Содержание CustomAttributes)
        public virtual IIS.Test_2.DetailArrayOfСодержание Содержание
        {
            get
            {
                // *** Start programmer edit section *** (НастройкаОпр.Содержание Get start)

                // *** End programmer edit section *** (НастройкаОпр.Содержание Get start)
                if ((this.fСодержание == null))
                {
                    this.fСодержание = new IIS.Test_2.DetailArrayOfСодержание(this);
                }
                IIS.Test_2.DetailArrayOfСодержание result = this.fСодержание;
                // *** Start programmer edit section *** (НастройкаОпр.Содержание Get end)

                // *** End programmer edit section *** (НастройкаОпр.Содержание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройкаОпр.Содержание Set start)

                // *** End programmer edit section *** (НастройкаОпр.Содержание Set start)
                this.fСодержание = value;
                // *** Start programmer edit section *** (НастройкаОпр.Содержание Set end)

                // *** End programmer edit section *** (НастройкаОпр.Содержание Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НастройкаОпрE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НастройкаОпрE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НастройкаОпрE", typeof(IIS.Test_2.НастройкаОпр));
                }
            }
            
            /// <summary>
            /// "НастройкаОпрL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НастройкаОпрL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НастройкаОпрL", typeof(IIS.Test_2.НастройкаОпр));
                }
            }
        }
    }
}

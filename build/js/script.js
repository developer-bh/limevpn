$(document).ready(function(){var a;$(".home_list__title a").click(function(){$(".home_list__title").toggleClass("list_open"),$(".accordion").toggleClass("accordion_hidden")}),$(".home_os__list label").on("change",function(){$(this).toggleClass("label_choose")}),$(".home_protocall__list label").on("change",function(){$(this).toggleClass("label_choose")}),$(".downloads_select__list label").on("change",function(){$(".downloads_select__list label").removeClass("label_choose"),$(this).toggleClass("label_choose")}),$(".payplal_list label").on("change",function(){$(".payplal_list label").removeClass("label_choose"),$(this).toggleClass("label_choose")}),(a=jQuery)(".accordion > li:eq(0) a").addClass("").next().slideDown(),a(".accordion a").click(function(t){var e=a(this).closest("li").find("p");a(this).closest(".accordion").find("p").not(e).slideUp(),a(this).hasClass("")?a(this).removeClass(""):(a(this).closest(".accordion").find("a.active").removeClass(""),a(this).addClass("")),e.stop(!1,!0).slideToggle(),t.preventDefault()}),$(".congratulation_help__skip a").click(function(){$(".congratulation").addClass("hidden")}),$(".navigation").hover(function(){$(this).toggleClass("navigation__full"),$(".navigation__bottom").toggleClass("hidden_nav_bottom"),$(".navigation_top ul li a span").toggleClass("hidden_span"),$(".navigation_top ul li").toggleClass("swipe_list"),$(".navigation_top__logo").toggleClass("logo_change")}),$(".home_item_top").click(function(t){$(".home_item_top").removeClass("color_green"),$(".home_item_top").addClass("color_grey"),$(this).addClass("color_green"),$(this).removeClass("color_grey"),$(".home_left__block").hide(),$("#"+$(this).attr("data-related")).show(),t.preventDefault()}),$(".product_item").click(function(t){$(".product_text").addClass("hidden"),$(".product_item").removeClass("active"),$(this).addClass("active"),$(".manage_item").hide(),$("#"+$(this).attr("data-related")).show(),t.preventDefault()}),$(".billing_tabs__item").click(function(t){$(".billing_tabs__item").removeClass("active"),$(this).addClass("active"),$(".billing_bl").hide(),$("#"+$(this).attr("data-related")).show(),t.preventDefault()}),$(".billing_methods__item").click(function(t){$(".billing_coupon").fadeOut(300),$(".billing_methods__item").removeClass("active"),$(this).addClass("active"),$(".billing_meth").hide(),$("#"+$(this).attr("data-related")).show(),t.preventDefault()}),$(".support_tabs__item").click(function(t){$(".support_tabs__item").removeClass("active"),$(this).addClass("active"),$(".support_bl").hide(),$("#"+$(this).attr("data-related")).show(),t.preventDefault()}),$(".affiliates_tabs__item").click(function(t){$(".affiliates_tabs__item").removeClass("active"),$(this).addClass("active"),$(".affiliates_bl").hide(),$("#"+$(this).attr("data-related")).show(),t.preventDefault()}),$(".banners_tabs a").click(function(t){$(".banners_tabs a").removeClass("active"),$(this).addClass("active"),$(".banners_item").hide(),$("#"+$(this).attr("data-related")).show(),t.preventDefault()}),$(".paymentwall_list label").click(function(t){$(".paymentwall_list label").removeClass("label_choose"),$(this).addClass("label_choose"),$(".billing_paymentwall__agree input").hide(),$("#"+$(this).attr("data-related")).show(),t.preventDefault()}),$("select").change(function(){$(".add_stats_list").hide(),$("#"+$(this).val()).show()}),$(".product_help .accordion a").click(function(){$(".product_help .accordion a").removeClass("accordion_active"),$(this).toggleClass("accordion_active")}),$(".manage_buttons .btn_rose").click(function(){$(".product_help").addClass("product_help__show")}),$(".product_help__close").click(function(){$(".product_help").removeClass("product_help__show")})});